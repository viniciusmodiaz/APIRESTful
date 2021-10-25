const error = {
    userNotFound: {
        message: 'Usuário não encontrado',
        statusCode: 400,
    },
    errorUserExist:{
        message: 'E-mail já existente',
        statusCode: 400,
    },
    errorRegister: {
        message: 'Falha ao cadastrar',
        statusCode: 400,
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
        message: 'Erro na autenticação',
        statusCode: 401,
    },   
    errorInvalidSession: {
        message: 'Sessão inválida',
        statusCode: 401,
    },   
    pageNotFound: {
        message: 'Page not found',
        statusCode: 404,
    },
};

module.exports = error;