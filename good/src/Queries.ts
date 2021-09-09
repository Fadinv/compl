import {gql} from '@apollo/client';

export const GET_PRODUCTS = gql`
    query GetProducts {
        products {
            idProduct
            name
        }
    }
`

export const GET_SINGLE_PRODUCT = gql`
    query GetProducts($idProduct: Float!) {
        product(idProduct: $idProduct) {
            idProduct
            name
            price
            description
        }
    }
`