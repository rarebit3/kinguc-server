const { User, Regions, sequelize } = require('../models')
const { Op } = require('Sequelize')

const SearchUsers = async (req, res) => {
    try {
        const query = req.query.keyword
        const data = await User.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${query}%`
                }
            },
            
            include: [
                {
                model: Regions,
                as: 'ruler_of',
                attributes: ['id', 'name']
                }
            ]
        })
        res.send(data)
    } catch (error) {
        throw error
    }
}


const GetAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.send(users)
    } catch (error) {
      throw error  
    }
}

const GetUsersAndRegions = async (req, res) => {
    try {
        const data = await User.findAll({
            include: [{
                model: Regions,
                as: 'ruler_of',
            }]
        })
        res.send(data)
    } catch (error) {
        throw error
    }
}

const GetUserDetails = async (req, res) => {
    try {
        const user = await User.findByPk(
            req.params.user_id, {
                include: [{
                    model: Regions,
                    as: 'ruler_of',
                }]
            }
            
        )
        res.send(user)
    } catch (error) {
      throw error  
    }
}

const CreateUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.send(newUser)
    } catch (error) {
      throw error  
    }
}

const UpdateUser = async (req, res) => {
    try {
        const userId = parseInt(req.params.user_id)
        const updatedUser = await User.update(req.body, {
            where: { id: userId }, 
            returning: true   
        })
        res.send(updatedUser)
    } catch (error) {
      throw error  
    }
}

const DeleteUser = async (req, res) => {
    try {
        const userId = parseInt(req.params.user_id)
        await User.destroy({
            where: { id: userId }
        })
        res.send({ message: `Deleted user with an id of ${userId}`})
    } catch (error) {
      throw error  
    }
}


module.exports = {
    GetUsersAndRegions,
    GetAllUsers,
    GetUserDetails,
    CreateUser,
    UpdateUser,
    DeleteUser,
    SearchUsers 
}