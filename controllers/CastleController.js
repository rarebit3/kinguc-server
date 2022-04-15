const { Castles } = require('../models')

const GetAllCastles = async (req, res) => {
    try {
        const castles = await Castles.findAll()
        res.send(castles)
    } catch (error) {
        throw error
    }
}

const GetCastleDetails = async (req, res) => {
    try {
        const castle = await Castles.findByPk(
            req.params.castle_id
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
            where: { id: castleId}
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
    DeleteCastle
}