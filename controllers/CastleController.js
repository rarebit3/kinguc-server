const { Castles, User, Regions } = require('../models')
const { Op } = require('Sequelize')

const SearchCastles = async (req, res) => {
    try {
        const query = req.query.keyword
        const data = await Castles.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${query}%`
                }
            },
            include: [
                {
                    model: User,
                    as: 'owned_by',
                    attributes: ['id', 'name']
                },
                {
                    model: Regions,
                    as: 'location',
                    attributes: ['id', 'name']
                }
            ]
        })
        res.send(data)
    } catch (error) {
        throw error
    }
}

const GetAllCastles = async (req, res) => {
    try {
        const castles = await Castles.findAll({
            include: [
                {
                    model: User,
                    as: 'owned_by',
                    attributes: ['id', 'name']
                },
                {
                    model: Regions,
                    as: 'location',
                    attributes: ['id', 'name']
                }
            ]
        })
        res.send(castles)
    } catch (error) {
        throw error
    }
}

const GetCastleDetails = async (req, res) => {
    try {
        const castle = await Castles.findByPk(
            req.params.castle_id, {
                include: [
                {
                    model: User,
                    as: 'owned_by',
                    attributes: ['id', 'name']
                },
                {
                    model: Regions,
                    as: 'location',
                    attributes: ['id', 'name']
                }
            ]}
            
        )
        res.send(castle)
    } catch (error) {
        throw error
    }
}

const CreateCastle = async (req, res) => {
    try {
        const newCastle = await Castles.create(req.body)
        res.send(newCastle)
    } catch (error) {
        throw error
    }
}

const UpdateCastle = async (req, res) => {
    try {
        const castleId = parseInt(req.params.castle_id)
        const updatedCastle = await Castles.update(req.body, {
            where: { id: castleId},
            returning: true
        })
        res.send(updatedCastle)
    } catch (error) {
            throw error
    }
} 

const DeleteCastle = async (req, res) => {
    try {
        const castleId = parseInt(req.params.castle_id)
        await Castles.destroy({
            where: { id: castleId }
        })
        res.send({ message: `Deleted castle with an id of ${castleId}`})
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAllCastles,
    GetCastleDetails,
    CreateCastle,
    UpdateCastle,
    DeleteCastle,
    SearchCastles
}