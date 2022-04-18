const Router = require('express').Router()
const controller = require('../controllers/UserController')

Router.get('/search', controller.SearchUsers)
Router.get('/', controller.GetUsersAndRegions)
// Router.get('/', controller.GetAllUsers)
// Router.get('/:user_id', controller.GetUserDetails)
// Router.post('/', controller.CreateUser)
// Router.put('/:user_id', controller.UpdateUser)
// Router.delete('/:user_id', controller.DeleteUser)

module.exports = Router