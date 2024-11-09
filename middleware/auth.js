const jwt = require ('jsonwebtoken');

const config = require('../config.js');
function authMiddleware (req, res, next){
    const token = req.headers ['authorization'];

    if(!token){
        return res.status(401).json({mensagem: 'Token não fornecido'});

    }
    jwt.verify(token, config.ecret, (err, decoded)=> {
        if(err){
            return res.status(401).json ({mensagem:'Token invalido'});

        }
        req.session =decoded
        next()
    });
}
module.exports=authMiddleware