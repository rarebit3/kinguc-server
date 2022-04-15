const Router = require('express').Router()
const UserRouter = require('./UserRouter.js')
const RegionRouter = require('./RegionRouter.js')
const CastleRouter = require('./CastleRouter')

Router.use('/user', UserRouter)
Router.use('/region', RegionRouter)
Router.use('/castle', CastleRouter)

module.exports = Router