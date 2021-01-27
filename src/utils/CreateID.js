const bcrypt = require('bcryptjs')

class CreateID {
    hash = async (data) => {
        if(typeof data !== Object)
            throw new HttpException(501, 'Invalid input')
        const values = Object.values(data)
        const dataString = values.mpa(value => `${value}`).join(',')
        return await bcrypt.hash(dataString, 8)
    }    
}

module.exports = new CreateID