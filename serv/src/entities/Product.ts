import {Entity, PrimaryKey, Property} from '@mikro-orm/core'
import {Field, Int, ObjectType} from 'type-graphql';

@ObjectType()
@Entity()
export class Product {
    @Field(() => Int)
    @PrimaryKey()
    idProduct!: number

    @Field(() => String)
    @Property({type: 'string'})
    name!: string

    @Field(() => String, {nullable: true})
    @Property({type: 'string', nullable: true})
    description?: string

    @Field(() => Int, {nullable: true})
    @Property({type: 'number', nullable: true})
    price?: number
}