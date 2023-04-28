const Spending = require('../models/Spending')
const { update, selectWithConditon, insertData, selectEntity } = require('../utils/utils')
const moment = require('moment')

class SpendingRepository {

    constructor() {
        this.model = Spending
    }

    async getAllSpendings() {
        const spendings = await selectEntity(this.model)
        return spendings
    }

    async getAllUserSpendings(userId) {
        const spendings = await selectWithConditon(this.model, { "user_id": userId })
        return spendings
    }

    async createUserSpendings(spendingInfo) {
        const createdSpending = await insertData(this.model, spendingInfo)
        return createdSpending.dataValues
    }

    async completeSpending(spendingId) {
        const updatedData = {
            isCompleted: true,
            completionDate: moment().format('YYYY-MM-DD')
        }
        const completedSpending = await update(this.model, updatedData, spendingId)
        return completedSpending
    }
};


module.exports = SpendingRepository;