const mongoose = require('../database');
const { v4: uuidv4} = require('uuid');
const bcrypt = require('bcryptjs');
const generateToken = require('../middlewares/token');

const UserSchema = new mongoose.Schema({
    _id: { 
        type: String, 
        default: function genUUID() {
            return uuidv4()
        }
    },
    nome:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        unique: true,
        require: true,
        lowercase: true,
    },
    senha: {
        type: String,
        require: true,
        select: false,
    },
    data_criacao:{
        type: Date,
        default: Date.now,
    },
    data_atualizacao:{
        type: Date,
        default: Date.now,
    },
    token:{
        type: String,
        default: generateToken(this._id),
    },
    ultimo_login:{
        type: Date,
    },
    telefones: [
        {
            _id: { 
                type: String, 
                default: function genUUID() {
                    return uuidv4()
                }
            },
            numero: {
                type: String,
                require: true
            },
            ddd: {
                type: String,
                require: true
            }
        }
    ]
}, 
{
    versionKey: false
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;