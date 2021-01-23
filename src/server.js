const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const HttpException = require('./utils/HttpException.utils')
const errorMiddleware = require('./middleware/error.middleware')

const app = express()

dotenv.config()

app.use(express.json())

app.use(cors())

app.options("*", cors())

app.options("*", (req, res, next) => {
    const error = new HttpException(404, 'Endpoint Not Found')
    next(err)
})

app.use(errorMiddleware)

const port = Number(process.env.PORT || 3331)

app.listen(port, () => 
    console.log(`Server is running on port ${port}`)
)

