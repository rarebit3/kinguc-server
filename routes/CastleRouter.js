const Router = require('express').Router()
const controller = require('../controllers/CastleController')
const middleware = require('../middleware')

Router.get('/search', controller.SearchCastles)

Router.get('/', controller.GetAllCastles)

Router.get('/:castle_id', controller.GetCastleDetails)

Router.post('/', controller.CreateCastle)

Router.put('/:castle_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateCastle
)

Router.delete('/:castle_id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteCastle)

module.exports = Router
