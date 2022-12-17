const ResponseModel = require('../utilities/responseModel');
const tokenHandler = require('../utilities/tokenHandler');

function authMiddleware(req, res, next){
    if(req.url.startsWith('/auth')){
        return next();
    }

    // Fetch the token.
    let token = req.headers['authorization'];
    if(!token){
        res.status(401);
        return res.json(new ResponseModel(null, null, ['No token found.']));
    }

    // Verify the token.
    try{
        token = token.split(' ')[1];
        const decodedToken = tokenHandler.verifyToken(token);
        console.log(decodedToken);
        return next();
    }
    catch{
        res.status(401);
        return res.json(new ResponseModel(null, null, ['Invalid token.']));
    }
}

module.exports = authMiddleware;