import {Arg, Ctx, Mutation, Query, Resolver} from 'type-graphql'
import {MyContext} from '../types'
import {Product} from '../entities/Product'

@Resolver()
export class ProductResolver {
    @Query(() => [Product])
    async products(@Ctx() {em}: MyContext) {
        return em.find(Product, {})
    }

    @Query(() => Product)
    async product(
        @Ctx() {em}: MyContext,
        @Arg('idProduct') idProduct: number
    ) {
        return em.findOne(Product, {idProduct})
    }

    @Mutation(() => Boolean)
    async updateProduct(
        @Ctx() {em}: MyContext,
        @Arg('idProduct') idProduct: number,
        @Arg('name') name: string,
        @Arg('description') description: string,
        @Arg('price') price: number
    ) {
        const note = await em.findOne(Product, {idProduct})
        if (!note) return

        note.name = name
        note.price = price
        note.description = description
        await em.persistAndFlush(note)
        return true
    }

    @Mutation(() => Boolean)
    async deleteProduct(
        @Ctx() {em}: MyContext,
        @Arg('idProduct') idProduct: number,
    ) {
        const note = await em.findOne(Product, {idProduct})
        if (!note) return false
        await em.removeAndFlush(note)
        return true
    }

    @Mutation(() => Boolean, {nullable: true})
    async createProduct(
        @Ctx() {em}: MyContext,
        @Arg('name') name: string
    ) {
        const product = em.create(Product, {name})
        await em.persistAndFlush(product)

        return true
    }
}