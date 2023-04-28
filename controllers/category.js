const CategoryRepository = require('../repositories/categoryRepository')
const categoryRep = new CategoryRepository();

module.exports = {
    async getAllUserCategories(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 200
            const categoriesInfo = await categoryRep.getAllUserCategories(req.body.userId)
            res.send(JSON.stringify(categoriesInfo));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify('Invalid credentials'));
        }
    },
    async createUserCategory(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const newCategoryInfo = await categoryRep.createUserCategory(req.body)
            res.send(JSON.stringify(newCategoryInfo));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify('Database error'));
        }
    },
    async editUserCategory(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const updatedCategoryInfo = await categoryRep.editUserCategory(req.body)
            res.send(JSON.stringify(updatedCategoryInfo));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify('Database error'));
        }
    }
};
