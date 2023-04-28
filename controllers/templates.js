const TemplatesRepository = require('../repositories/templatesRepository')
const templatesRepo = new TemplatesRepository();

module.exports = {
    async getAllUserTemplates(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 200
            const templatesInfo = await templatesRepo.getAllUserTemplates(req.body.userId)
            res.send(JSON.stringify(templatesInfo));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify('Invalid query'));
        }
    },
    async createUserTemplate(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const newTemplateInfo = await templatesRepo.createUserTemplate(req.body.templateInfo, req.body.spendingIds)
            res.send(JSON.stringify(newTemplateInfo));
        }
        catch(err){
            res.statusCode = 404;
            res.send(JSON.stringify('Database error', err));
        }
    },
    async applyUserTemplate(req, res){
        res.set("Content-Type", "application/json");
        try{
            res.statusCode = 201
            const appliedTemplateInfo = await templatesRepo.applyUserTemplate(req.body.id)
            res.send(JSON.stringify(appliedTemplateInfo));
        }
        catch(err){
            console.log(err)
            res.statusCode = 404;
            res.send(JSON.stringify('Database error', err));
        }
    },
};
