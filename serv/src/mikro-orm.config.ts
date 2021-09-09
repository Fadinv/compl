import * as path from 'path'
import {Configuration, Connection, IDatabaseDriver, LoadStrategy, Options} from '@mikro-orm/core';
import {Product} from './entities/Product';

export default {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Product],
    host: 'db',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    dbName: 'postgres',
    type: 'postgresql',
    debug: true,
    loadStrategy: LoadStrategy.SELECT_IN
} as Configuration<IDatabaseDriver<Connection>> | Options<IDatabaseDriver<Connection>> | undefined