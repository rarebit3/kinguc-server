const res = require('express/lib/response')
const { Region } = require('../models')

const GetAllRegions = async (req, res) => {
    try {
        const regions = await Region.findAll()
        res.send(regions)
    } catch (error) {
        throw error
    }
}

const GetRegionDetails = async (req, res) => {
    try {
        const region = await Region.findByPk(
            req.params.property_id
        )
        res.send(region)
    } catch (error) {
        throw error
    }
}

const CreateRegion = async (req, res) => {
    try {
        const newRegion = await Region.create(req.body)
        res.send(newRegion)
    } catch (error) {
        throw error
    }
}

const UpdateRegion = async (req, res) => {
    try {
        const regionId = parseInt(req.params.region_id)
        updatedRegion = await Region.update(req.body, {
            where: { id: regionId}
        })
    } catch (error) {
            throw error
    }
} 

const DeleteRegion = async (req, res) => {
    try {
        const regionId = parseInt(req.params.region_id)
        await Region.destroy({
            where: { id: regionId }
        })
        res.send({ message: `Deleted region with an id of ${regionId}`})
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetAllRegions,
    GetRegionDetails,
    CreateRegion,
    UpdateRegion,
    DeleteRegion
}