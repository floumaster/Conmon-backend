const User = require('../models/User')
const { selectEntity, selectWithConditon, insertData, update } = require('../utils/utils')
const md5 = require('md5');

class UserRepository {

    constructor() {
        this.model = User
    }

    async getAllUsers() {
        const users = await selectEntity(this.model)
        return users
    }

    async login(email, password, token) {
        const searchedUsers = await selectWithConditon(this.model, { email, password: md5(password) })
        if(searchedUsers && searchedUsers.length > 0){
            await update(this.model, {fcmToken: token}, searchedUsers[0].id)
            return searchedUsers[0]
        }
        throw new Error()
    }

    async register(userData, token) {
        const createdUser = await insertData(this.model, {
            ...userData,
            password: md5(userData.password)
        })
        await update(this.model, {fcmToken: token}, createdUser.dataValues.id)
        return createdUser.dataValues
    }

    async updateBudget(userId, budget) {
        const updatedUser = await update(this.model, {monthBudget: budget}, userId)
        return updatedUser
    }

    async updateCurrency(userId, currency) {
        const updatedUser = await update(this.model, {currency}, userId)
        return updatedUser
    }
};


module.exports = UserRepository;