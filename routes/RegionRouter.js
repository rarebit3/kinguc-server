const Router = require('express').Router()
const controller = require('../controllers/RegionController')

Router.get('/', controller.GetAllRegions)
Router.get('/:region_id', controller.GetRegionDetails)
Router.post('/', controller.CreateRegion)
Router.put('/:region_id', controller.UpdateRegion)
Router.delete('/:region_id', controller.DeleteRegion)

module.exports = Router