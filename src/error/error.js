const error = {
    userNotFound: {
        message: 'Usuário não encontrado',
        statusCode: 404,
    },
    errorUserExist:{
        message: 'E-mail já existente',
        statusCode: 409,
    },
    errorRegister: {
        message: 'Falha ao cadastrar',
        statusCode: 500,
    },
    errorAuthenticate: {
        message: 'Erro na autenticação',
        statusCode: 401,
    },
    errorNotAuthorized: {
        message: 'Não autorizado',
        statusCode: 403,
    },
    errorUserDataAuthenticate: {
        message: 'Usuário e/ou senha inválidos"s',
        statusCode: 401,
    },   
    errorInvalidSession: {
        message: 'Sessão inválida',
        statusCode: 401,
    }
};

module.exports = error;