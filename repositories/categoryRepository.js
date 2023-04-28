const Category = require('../models/Category')
const { update, selectWithConditon, insertData } = require('../utils/utils')

class CategoryRepository {

    constructor() {
        this.model = Category
    }

    async getAllUserCategories(userId) {
        const categories = await selectWithConditon(this.model, { "user_id": userId })
        return categories
    }

    async createUserCategory(categoryInfo) {
        const createdCategory = await insertData(this.model, categoryInfo)
        return createdCategory.dataValues
    }

    async editUserCategory(categoryInfo) {
        const updatedCategory = await update(this.model, categoryInfo, categoryInfo.id)
        return updatedCategory
    }

};


module.exports = CategoryRepository;