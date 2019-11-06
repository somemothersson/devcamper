const express = require('express')
const dotenv = require('dotenv')

dotenv.config({ path: '.env'})

const app = express()

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))