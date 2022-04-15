const { Regions } = require('../models')

const GetAllRegions = async (req, res) => {
    try {
        const regions = await Regions.findAll()
        res.send(regions)
    } catch (error) {
        throw error
    }
}

const GetRegionDetails = async (req, res) => {
    try {
        const region = await Regions.findByPk(
            req.params.region_id
        )
        res.send(region)
    } catch (error) {
        throw error
    }
}

const CreateRegion = async (req, res) => {
    try {
        const newRegion = await Regions.create(req.body)
        res.send(newRegion)
    } catch (error) {
        throw error
    }
}

const UpdateRegion = async (req, res) => {
    try {
        const regionId = parseInt(req.params.region_id)
        const updatedRegion = await Regions.update(req.body, {
            where: { id: regionId}
        })
        res.send(updatedRegion)
    } catch (error) {
            throw error
    }
} 

const DeleteRegion = async (req, res) => {
    try {
        const regionId = parseInt(req.params.region_id)
        await Regions.destroy({
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