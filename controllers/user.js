const UserRepository = require('../repositories/userRepository')
const userRep = new UserRepository();

module.exports = {
    async login(req, res, next){
        res.set("Content-Type", "application/json");
        try{
            console.log('here')
            res.statusCode = 201
            const userInfo = await userRep.login(req.body.email, req.body.password, req.body.token)
            res.send(JSON.stringify(userInfo));
        }
        catch(err){
            res.statusCode = 404
            res.send(JSON.stringify({error: 'Invalid credentials'}));
        }
    },
    async register(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const createdUser = await userRep.register(req.body, req.body.token)
            res.send(JSON.stringify(createdUser));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify('Database error'));
        }
    },
    async setUserBudget(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            console.log(req.body)
            const updatedUser = await userRep.updateBudget(req.body.userId, req.body.budget)
            res.send(JSON.stringify(updatedUser));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify('Database error'));
        }
    },
    async setUserCurrency(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const updatedUser = await userRep.updateCurrency(req.body.userId, req.body.currency)
            res.send(JSON.stringify(updatedUser));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify('Database error'));
        }
    },
};
