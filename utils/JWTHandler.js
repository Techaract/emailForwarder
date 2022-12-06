const handler = {}
const jwt = require('./jwt')


handler.getTokenObj = function(authorization){
    if(authorization){
        return;
    }
    return null
}

handler.generateAccessToken = function(id){
    return jwt.data.generate(id)
}

handler.generateRefreshToken = function(id){
    return jwt.data.refreshToken(id)
}

const getTokenFromHeader = function(authorization){
    return authorization.split(' ')[1]
}




exports.data = handler