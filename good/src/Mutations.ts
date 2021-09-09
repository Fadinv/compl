import {gql} from '@apollo/client'

export const UPDATE_PRODUCT = gql`
    mutation UpdateProductMutation($idProduct: Float!, $name: String!, $description: String!, $price: Float!) {
        updateProduct(idProduct: $idProduct, name: $name, description: $description, price: $price)
    }
`

export const CREATE_PRODUCT = gql`
    mutation CreateProduct($name: String!) {
        createProduct(name: $name)
    }
`

export const DELETE_PRODUCT = gql`
    mutation DeleteProductMutation($idProduct: Float!) {
        deleteProduct(idProduct: $idProduct)
    }
`