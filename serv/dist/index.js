"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const express = require('express');
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const mikro_orm_config_1 = require("./mikro-orm.config");
const cors = require("cors");
const product_1 = require("./resolvers/product");
let port = process.env.PORT;
if (port == null || port == '') {
    port = 4000;
}
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const orm = yield core_1.MikroORM.init(mikro_orm_config_1.default);
    yield orm.getMigrator().up();
    const app = express();
    const schema = yield (0, type_graphql_1.buildSchema)({ resolvers: [product_1.ProductResolver], validate: true });
    const context = () => ({ em: orm.em });
    const apolloServer = new apollo_server_express_1.ApolloServer({ schema, context });
    yield apolloServer.start();
    app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
    apolloServer.applyMiddleware({ app, cors: false });
    app.listen(port, () => console.log(`server started on localhost:${port}`));
});
main().catch(console.error);
//# sourceMappingURL=index.js.map