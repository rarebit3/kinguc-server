const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')


const AuthRouter = require('./routes/AuthRouter')
const AppRouter = require('./routes/AppRouter')
const UserRouter = require('./routes/UserRouter')

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors())
//app.use(express.json())
app.use(logger('dev'))
app.use(bodyParser.json())
//app.use(express.urlencoded({ extended: true }))
app.use('/auth', AuthRouter)
app.use('/users', UserRouter)
app.use('/api', AppRouter)

app.get('/', (req, res) => res.json({ message: 'Kingdom of Universal Cluster' }))

app.listen(PORT, () => console.log(`Universal Clusters has started on: ${PORT}`))