const express = require('express')
const app = express()
const cors = require('cors')

const AppRouter = require('./routes/AppRouter')

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Kingdom of Universal Cluster' }))
app.use('/api', AppRouter)
app.listen(PORT, () => console.log(`Universal Clusters has started on: ${PORT}`))