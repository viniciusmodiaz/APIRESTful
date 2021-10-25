const jwt = require('jsonwebtoken');

module.exports = function generateToken(params = {}){
    return jwt.sign(params, process.env.SECRET, {
        expiresIn: parseInt(process.env.SECRET),
    });
};
