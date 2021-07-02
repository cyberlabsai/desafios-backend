const express = require('express')
const routes = require('./routes')

require('./database')

const PORT = process.env.PORT || 3333
const app = express()



app.use(express.json())
app.use(routes)

app.listen(PORT)
