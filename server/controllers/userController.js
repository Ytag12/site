const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User} = require('../models/models')

const generateJWT = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController{
    async registration(req,res,next){
        const {login, password, role} = req.body
        if (!login || !password){
            return next(ApiError.badRequest('Чет не то с логином или паролем'))
        }
        const candidate = await User.findOne({where: {login}})
        if (candidate){
            return next(ApiError.badRequest('Already exist'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({login, role, password:hashPassword})
        const token = generateJWT(user.id, user.login, user.role)
        return res.json({token})
    }
    async login(req,res, next){
        const{login, password} = req.body
        const user = await User.findOne({where: {login}});
        if (!user){
            return next (ApiError.internal("НЕТ ТАКОГО ДУРАЧКА"))
        }
        let comparePassword = await bcrypt.compare(password, user.password);
        //
        // Вот тут короч можно написать авторизацию которую ты хочешь
        //
        if(!comparePassword){
            return next(ApiError.internal("Пароль не тот, дурашка"))
        }
        const token = generateJWT(user.id, user.login, user.role)
        return res.json({token})
    }
    async check(req,res,next){
        const token = generateJWT(req.user.id, req.user.login, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()