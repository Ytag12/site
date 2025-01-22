const ApiError = require('../error/ApiError')
const uuid = require('uuid')
const path = require('path')
const {Forum} = require('../models/models')
const { json, where } = require('sequelize')

class forumController{
    async create(req, res, next) {
        console.log("Started")
        try {
            const {name, description} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const forum = await Forum.create({ name, description, img: fileName });
            return res.json(forum)
        } catch(e){
            next(ApiError.badRequest(e.message));
        }
    }
    async get(req, res, next) {
        console.log("GET request received");
        try {
            const forums = await Forum.findAll();
            return res.json(forums);
        } catch (e) {
            next(ApiError.internal(e.message)); // Обработка ошибок
        }
    }
    // async getOne(req,res){
    //     const {id} = req.params
    //     const forum = await Forum.findOne(
    //         {
    //             where: {id},
    //             include: [{model: ForumInfo, as: 'info'}]
    //         })
    //     return res.json(project)
    // }
}

module.exports = new forumController()