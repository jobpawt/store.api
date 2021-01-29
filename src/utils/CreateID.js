const bcrypt = require('bcryptjs')
const HttpException = require('../utils/HttpException.utils')

class CreateID {
    hash = async (data) => {
        if(typeof data != 'object')
            throw new HttpException(501, 'Invalid input')
        const values = Object.values(data)
        const dataString = values.map(value => `${value}`).join(',')
        const res = dataString.replace('/', '')
        return await bcrypt.hash(res, 8)
    }    
}

module.exports = new CreateID