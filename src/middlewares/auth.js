const jwt = require('jsonwebtoken');
const error = require('../error/error');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(error.errorNotAuthorized.statusCode).send({ error: error.errorNotAuthorized.message});
    }

    const parts = authHeader.split(' ');

    if(!parts.lenght == 2){
        return res.status(error.errorNotAuthorized.statusCode).send({ error: error.errorNotAuthorized.message});
    }

    const [ scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme)){
        return res.status(error.errorNotAuthorized.statusCode).send({ error: error.errorNotAuthorized.message});
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if(err) {
            return res.status(error.errorInvalidSession.statusCode).send({error: error.errorInvalidSession.message});
        }
        req.userId = decoded.id;
        return next();
    });
};