const Router = require('express').Router()
const controller = require('../controllers/CastleController')

Router.get('/', controller.GetAllCastles)
Router.get('/:castle_id', controller.GetCastleDetails)
Router.post('/', controller.CreateCastle)
Router.put('/:castle_id', controller.UpdateCastle)
Router.delete('/:castle_id', controller.DeleteCastle)

module.exports = Router