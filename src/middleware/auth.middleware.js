const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const HttpException = require('../utils/HttpException.utils')
const awaitHandler = require('./awaitHandler.middleware')

dotenv.config()

const auth = (...roles) => {
    return async function(req, res, next) {
        try{
            const authHeader = req.headers.authorization
            const bearer = 'Bearer '

            if(!authHeader || !authHeader.startsWith(bearer))
                throw new HttpException(401, 'Access denied. No credentials sent')

            const token = authHeader.replace(bearer, '') 
            const secretKey = process.env.SECRET_JWT
            console.error(`secretKey => ${secretKey}`)
            const decode = jwt.verify(token, secretKey)
            const user = await UserModel.findOne({id: decode.uid})

            if(!user)
                throw new HttpException(401, 'Authentication failed')

            const ownerAuthorized = req.params.id == user.id 

            if(!ownerAuthorized && roles.length && !roles.includes(user.role))
                throw new HttpException(401, 'Unauthorized')

            next()

        }catch(error)  {
            next(error)
        }
    }    
}

module.exports = auth