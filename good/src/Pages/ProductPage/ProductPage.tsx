import React from 'react'
import {RouteComponentProps} from 'react-router-dom'
import {useQuery} from '@apollo/client'
import {GET_SINGLE_PRODUCT} from '../../Queries'
import {Product} from '../../Types'
import {SingleProduct} from '../../Components/SingleProduct/SingleProduct'
import styles from './ProductPage.module.css'

type ProductsProps = RouteComponentProps<{ id?: string }>;

export const ProductPage: React.FC<ProductsProps> = ({history, match}) => {
    const idProduct = match.params.id ? +match?.params?.id : null
    const {loading, error, data} = useQuery(GET_SINGLE_PRODUCT, {variables: {idProduct}})

    if (loading) return <>loading...</>
    if (error) return error.message ? <>{error.message}</> : <>Непредвиденная ошибка</>

    const renderProduct = (product: Product) => <SingleProduct product={product}/>

    const goHome = () => history.push('/')

    return (
        <>
            {renderProduct(data.product)}
            <button className={styles.back_btn} onClick={goHome}>на главную</button>
        </>
    )
}