const Template = require('../models/Template')
const SpendingTemplate = require('../models/SpendingTemplate')
const Spending = require('../models/Spending')
const { v4: uuidv4 } = require('uuid');
const moment = require('moment')
const { update, selectWithConditon, insertData } = require('../utils/utils')
const SpendingRepository = require('../repositories/spendingRepository')
const spendingRep = new SpendingRepository();

class TemplatesRepository {

    constructor() {
        this.model = Template
    }

    async getAllUserTemplates(userId) {
        const templates = await selectWithConditon(this.model, { "user_id": userId })
        const spendingsIdsPromises = templates.map(template => {
            return selectWithConditon(SpendingTemplate, { "template_id": template.id }).then((data) => {
                return {
                    ...template,
                    spendingsId: data.map(union => union.spending_id)
                }
            })
        });
        const processedTemplates = await Promise.all(spendingsIdsPromises)
        return processedTemplates
    }

    async createUserTemplate(templateInfo, spendings) {
        const createdSpending = await insertData(this.model, templateInfo)
        spendings.map(spending => {
            const templatesSpendingData = {
                "spending_id": spending,
                "template_id": templateInfo.id
            }
            return insertData(SpendingTemplate, templatesSpendingData)
        })
        await Promise.all(spendings)
        return createdSpending.dataValues
    }

    async unapplyAllTemplates() {
        const templates = await selectWithConditon(this.model, { "isApplied": true })
        const templatesToUpdatePromises = templates.map(template => {
            return update(this.model, {isApplied: true}, template.id)
        })
        await Promise.all(templatesToUpdatePromises)
    }

    async applyUserTemplate(templateId){
        const templateSpendingsIds = await selectWithConditon(SpendingTemplate, { "template_id": templateId })
        const spendingsToCreate = []
        const spendingPromises = templateSpendingsIds.map(spending => {
            return selectWithConditon(Spending, {id: spending.spending_id}).then(data => {
                spendingsToCreate.push(data[0])
            })
        })
        await Promise.all(spendingPromises)
        const newSpendingsPromises = spendingsToCreate.map(spending => {
            const newData = {
                ...spending,
                id: uuidv4(),
                creationDate: moment().format('YYYY-MM-DD'),
                isCompleted: false,
                completionDate: null
            }
            return spendingRep.createUserSpendings(newData)
        })
        await Promise.all(newSpendingsPromises)
        const updatedTemplate = await update(this.model, {isApplied: true}, templateId)
        return updatedTemplate
    }
};


module.exports = TemplatesRepository;