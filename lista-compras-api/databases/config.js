const config = {
    'development': {
        db: 'lista_compras_dev',
        user:'postgres',
        password:'1234',
        host:'localhost',
        dialect:'postgres'
    },
    'test': {
        db: 'lista_compras_test',
        user:'postgres',
        password:'1234',
        host:'localhost',
        dialect:'postgres'
    }
};

module.exports = config;