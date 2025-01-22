const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',  {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})
// Для будущего если захочешь реально сделать форум
// const TextUsers = sequelize.define('textusers', {
//     id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
//     nameUsr: {type: DataTypes.STRING},
//     messege: {type: DataTypes.STRING}
// })
const Forum = sequelize.define('forums', {
    id: {type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull:false},
    img: {type: DataTypes.STRING, allowNull:false},
})
// const ForumInfo = sequelize.define('project_info', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     title: {type: DataTypes.STRING, allowNull:false},
//     description: {type: DataTypes.STRING, allowNull:false},
// })


// Forum.hasMany(ForumInfo, {as: 'info'})
// ForumInfo.belongsTo(Forum)

module.exports = {
    User,
    Forum
    // ForumInfo
}