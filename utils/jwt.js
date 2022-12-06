const jwt = require('jsonwebtoken');
const token = {}
const secret_key = 'my_secret_key'
const refresh_key = 'my_refresh_key'
const fs = require('fs');
var iss = "M3TechInfoSec";
var sub = "saim@sfm.com";
var aud = "https://sfm.m3tech.com.pk:3004/";
var exp = "1y";
var kid = "f5ffe9ef-1bfa-4af0-ae10-536433f6adea"

//https://github.com/auth0/node-jsonwebtoken/issues/358

token.publicKeyEncoder = function(obj){
var payload = {email : obj.sub}
var signOptions = {
    issuer : iss,
    subject: obj.sub,
    audience: aud,
    expiresIn: exp,
    algorithm: "RS256",
    header: {
        alg: "RS256",
        kid: kid
      }
};
// Create the JWT Token
var token = jwt.sign(payload, privateKey, signOptions);
    return token
}

const expiry = "1h"
const logger = require('../utils/logger')
token.generate = function(id){
    const user = {id : id}
    const token = jwt.sign({user},secret_key,{ 
        issuer : "oss.m3tech.com.pk",
        audience : id.toString()
    })
    return token
}

token.generateWithClientId = function(id,client_id){
    const user = {id,client_id}
    const token = jwt.sign(user,secret_key,{
        issuer : "oss.m3tech.com.pk",
        audience : id.toString()
    })
    return token
}

token.refreshToken = function(id){
    const user = {id : id}
    const token = jwt.sign({user},refresh_key,{ 
        expiresIn: '1y',
        issuer : "oss.m3tech.com.pk",
        audience : id.toString()
    })
    return token
}

token.ensureToken = function(req,res,next){
    const bearertoken = req.headers["authorization"]
    try{
        if(typeof bearertoken !== "undefined"){
            const bearer = bearertoken.split(' ')
            const token = bearer[1];
            var t = jwt.verify(token,secret_key)
            req.token = token;
            next(e);
        }else{
            logger.data.errorLog({Code : 401, Message : "Access Token required"},"jwt Error")
            res.status(401).json({Code : 401, Message : "Access Token required"})
        }
    }catch(e){
        logger.data.errorLog(e,"JWT error")
        res.status(440).json({Code : 440, Message : e.message})
    }
   
}

token.verifyRefreshToken = function(token){
    return new Promise((resolve, reject) => {
        jwt.verify(token,refresh_key, (error,payload) => {
            if(err) return reject(false)
            const user = payload.aud
            resolve(user)
        })
    })
}

token.getIdFromToken = function(token){
    return jwt.verify(token,secret_key,function(err,decodedToken){
        if(err){
            return null
        }else{
     //       console.log("DT",decodedToken)
            return {id : decodedToken.user.id}
        }
    })
}

token.makePublicKeyToken = function(data,obj){
    const tokena = jwt.sign({obj},data,{ 
        expiresIn: expiry,
        issuer : "oss.m3tech.com.pk",
    })
  //  console.log("tokena",tokena)
    return {token : tokena}
}

token.getIdFromRefreshToken = function(token){
    return jwt.verify(token,refresh_key,function(err,decodedToken){
        if(err){
            return null
        }else{
            return decodedToken.user.id
        }
    })
}

token.getTokenFromPrivateKey = function(token){
   // console.log('yahan')
    var decode = jwt.decode(token)
 //   console.log('decde',decode.obj)
}

exports.data = token;