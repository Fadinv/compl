"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const core_1 = require("@mikro-orm/core");
const Product_1 = require("./entities/Product");
exports.default = {
    migrations: {
        path: path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Product_1.Product],
    host: 'db',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    dbName: 'postgres',
    type: 'postgresql',
    debug: true,
    loadStrategy: core_1.LoadStrategy.SELECT_IN
};
//# sourceMappingURL=mikro-orm.config.js.map