const express = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');
const generateToken = require('../middlewares/token');
const error = require('../error/error');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { email } = req.body;
    try {
        if(await User.findOne({ email })){
            return res.status(error.errorUserExist.statusCode).send({ error: error.errorUserExist.message});
        }
        const user = await User.create(req.body);
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
    } catch (err) {
        return res.status(error.errorRegister.statusCode).send({ error: error.errorRegister.message});
    }
});

router.post('/authenticate', async (req, res) => {
    const { email, senha } = req.body;

    let user = await User.findOne({ email }).select('+senha');

    if(!user){
        return res.status(error.errorUserDataAuthenticate.statusCode).send({ error: error.errorUserDataAuthenticate.message });
    }
    if(!await bcrypt.compare(senha, user.senha)){
        return res.status(error.errorUserDataAuthenticate.statusCode).send({ error: error.errorUserDataAuthenticate.message });
    }

    try {
        const token = generateToken({ id: user.id });
        const updateData = { ultimo_login: new Date(Date.now()), token: token};
        user = await User.findByIdAndUpdate(user._id, updateData, { new: true });
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
        return res.status(error.errorAuthenticate.statusCode).send({ error: error.errorAuthenticate.message});
    }
});

module.exports = app => app.use( '', router);
