const jwt = require('jsonwebtoken');

module.exports.createToken = (data)=>{
    return jwt.sign(data, "QWERTYUIOP", {
        expiresIn: '7d',
        algorithm: 'HS256',
        audience: 'http://localhost',
        issuer: 'http://localhost',
    });
}

module.exports.verifyToken = (token)=>{
    return jwt.verify(token, "QWERTYUIOP", {
        audience: 'http://localhost',
        issuer: 'http://localhost',
    });
}
