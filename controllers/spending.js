const SpendingRepository = require('../repositories/spendingRepository')
const spendingRep = new SpendingRepository();

module.exports = {
    async getAllUserSpendings(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const spendingsInfo = await spendingRep.getAllUserSpendings(req.body.userId)
            res.send(JSON.stringify(spendingsInfo));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify('Invalid query'));
        }
    },
    async createUserSpending(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const newSpendingInfo = await spendingRep.createUserSpendings(req.body)
            res.send(JSON.stringify(newSpendingInfo));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify('Database error'));
        }
    },
    async completeUserSpending(req, res){
        res.set("Content-Type", "application/json");
        try{
            console.log('')
            res.statusCode = 201
            const completedSpending = await spendingRep.completeSpending(req.body.spendingId)
            res.send(JSON.stringify(completedSpending));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify('Database error'));
        }
    },
};
