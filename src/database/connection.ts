import knex from 'knex'; //gerencia o banco de dados
import path from 'path';

//migrations: controla as versoes do banco de dados; 

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
});

export default db;