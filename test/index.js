const User = require('../src/models/user');

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);

let token;
let id;

describe('User', function() {
    
    before(function(done) {
        User.deleteOne({}, function() {
            done();
        });
    });

    describe('/POST', function() {
        it('Deve Criar um usuário', function(done) {
            var user = {
                nome: "Vinicius Moraes Diaz",
                email: "vinicusmodiaz@gmail.com",
                senha: "senha",
                telefones: [
                    {
                        numero: "123456789",
                        ddd: "85"
                    }
                ]
            }
            chai.request(process.env.APP_SERVER+process.env.APP_PORT)
            .post('/register')
            .send(user)
            .end(function(error, res) {
                expect(res).have.status(200);
                expect(res.body).be.a('object');
                expect(res.body).have.property('nome');
                expect(res.body).have.property('email');
                expect(res.body).have.property('telefones');
                expect(res.body).have.property('data_atualizacao');
                expect(res.body).have.property('data_criacao');
                expect(res.body).have.property('id');
                expect(res.body).have.property('token');
                done();
            });
        });

        it('Deve logar', function(done) {
            var user = {
                email: "vinicusmodiaz@gmail.com",
                senha: "senha",
            }
            chai.request(process.env.APP_SERVER+process.env.APP_PORT)
            .post('/authenticate')
            .send(user)
            .end(function(error, res) {
                expect(res).have.status(200);
                expect(res.body).be.a('object');
                expect(res.body).have.property('nome');
                expect(res.body).have.property('email');
                expect(res.body).have.property('telefones');
                expect(res.body).have.property('data_atualizacao');
                expect(res.body).have.property('data_criacao');
                expect(res.body).have.property('email');
                expect(res.body).have.property('id');
                expect(res.body).have.property('token');
                token = res.body.token;
                id = res.body.id;
                done();
            });
        });
    })
    describe('/GET', function() {
        it('Deve procurar e retornar um usuário específico', function(done) {
            chai.request(process.env.APP_SERVER+process.env.APP_PORT)
            .get('/user/'+id)
            .set({ "Authorization": `Bearer ${token}` })
            .end(function(error, res) {
                expect(res).have.status(200);
                expect(res.body).be.a('object');
                expect(res.body).have.property('nome');
                expect(res.body).have.property('email');
                expect(res.body).have.property('telefones');
                expect(res.body).have.property('data_atualizacao');
                expect(res.body).have.property('data_criacao');
                expect(res.body).have.property('email');
                expect(res.body).have.property('id');
                expect(res.body).have.property('token');
                done();
            });
        });
    })
});