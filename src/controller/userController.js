const express = require('express');
const authMiddlere = require('../middlewares/auth');
const User = require('../models/user');
const error = require('../error/error');

const router = express.Router();

router.use(authMiddlere);

router.get('/:_id', async (req, res) => {
    try {
        const user = await User.findOne( {_id: req.params._id });

        if(!user){
            return res.status(error.userNotFound.statusCode).send({ error: error.userNotFound.message });
        }

        return res.send({
            id: user.id,
            nome: user.nome,
            email: user.email,
            data_criacao:  user.data_criacao,
            data_atualizacao: user.data_atualizacao,
            ultimo_login: user.ultimo_login,
            telefones: user.telefones,
            token: user.token
        });
    }catch (err) {
        return res.status(error.userNotFound.statusCode).send({ error: error.userNotFound.message });
    }
});

module.exports = app => app.use('/user', router);