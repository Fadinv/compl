import React, {useState} from 'react'
import styles from './CreateProductForm.module.css'
import {useMutation} from '@apollo/client'
import {CREATE_PRODUCT} from '../../Mutations'
import {GET_PRODUCTS} from '../../Queries'
import {classes} from '../../Utils'

interface CreateProductFormProps {
}

export const CreateProductForm: React.FC<CreateProductFormProps> = () => {
    const [productName, setProductName] = useState<string>('');
    const [createProduct, {loading, client}] = useMutation(CREATE_PRODUCT)

    const clearName = () => setProductName('');

    const refetch = () => client.refetchQueries({include: [GET_PRODUCTS]})
    const onClick = () => createProduct({variables: {name: productName}})
        .then(refetch)
        .then(clearName)
        .catch(console.error)

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => setProductName(e.target.value)

    return (
        <div className={styles.container}>
            <input
                className={styles.product_name}
                maxLength={20}
                value={productName}
                disabled={loading}
                onChange={onChangeName}
                placeholder={'Название продукта'}
            />
            <button
                className={classes(styles.add_btn, loading || !productName ? styles._disabled : undefined)}
                disabled={loading || !productName} onClick={onClick}
            >
                +
            </button>
        </div>
    )
}