import React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import {GET_PRODUCTS} from '../../Queries'
import {Product} from '../../Types'
import {SingleProduct} from '../../Components/SingleProduct/SingleProduct'
import styles from './Home.module.css'
import {Header} from '../../Components/Header/Header'

export const Home: React.FC<RouteComponentProps> = ({history}) => {
    const {loading, error, data} = useQuery(GET_PRODUCTS)

    if (loading) return <>loading...</>
    if (error) return <>error...</>

    const redirectTo = (idProduct: string) => history.push('/products/' + idProduct)

    const renderSingleProduct = (product: Product, key: number) => (
        <SingleProduct redirect={() => redirectTo(String(product.idProduct))} home key={key} product={product}/>
    )

    return (
        <div className={styles.container}>
            <Header/>
            <div className={styles.productContainer}>
                {!!data.products.length
                    ? data.products.map(renderSingleProduct)
                    : 'Список продуктов пуст'
                }
            </div>
        </div>
    )
}