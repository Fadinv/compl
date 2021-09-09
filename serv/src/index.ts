import {MikroORM} from '@mikro-orm/core'
const express = require('express')
import {ApolloServer} from 'apollo-server-express'
import {buildSchema} from 'type-graphql'
import {MyContext} from './types'
import mikroConfig from './mikro-orm.config'
import * as cors from 'cors'
import {ProductResolver} from './resolvers/product';

let port = process.env.PORT as any
if (port == null || port == '') {
    port = 4000
}

const main = async () => {
    const orm = await MikroORM.init(mikroConfig)
    await orm.getMigrator().up()

    const app = express()

    const schema = await buildSchema({resolvers: [ProductResolver], validate: true})
    const context = (): MyContext => ({em: orm.em})

    const apolloServer = new ApolloServer({schema, context})
    await apolloServer.start()

    app.use(cors({origin: 'http://localhost:3000', credentials: true}))
    apolloServer.applyMiddleware({app, cors: false})

    app.listen(port, () => console.log(`server started on localhost:${port}`))
}

main().catch(console.error)