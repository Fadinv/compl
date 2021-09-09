import React, {useState} from 'react'
import {Product} from '../../Types'
import styles from './SingleProduct.module.css'
import {OperationVariables, useMutation} from '@apollo/client'
import {DELETE_PRODUCT, UPDATE_PRODUCT} from '../../Mutations'
import {GET_PRODUCTS, GET_SINGLE_PRODUCT} from '../../Queries'
import {classes} from '../../Utils'
import {EditButton} from '../Icons/EditButton'
import {SaveButton} from '../Icons/SaveButton'
import {CancelButton} from '../Icons/CancelButton'

interface SingleProductProps {
    product: Product
    home?: boolean
    redirect?: () => void
}

export const SingleProduct: React.FC<SingleProductProps> = ({product, home, redirect}) => {
    const [deleteProduct, {loading, client}] = useMutation(DELETE_PRODUCT)
    const [updateProduct, updateInfo] = useMutation(UPDATE_PRODUCT)
    const [editingPrice, setEditingPrice] = useState<boolean>(false)
    const [editingDescription, setEditingDescription] = useState<boolean>(false)
    const [editPriceValue, setEditPriceValue] = useState<number>(product.price ?? 0)
    const [editDescriptionValue, setEditDescriptionValue] = useState<string>(product.description ?? '')

    const refreshProducts = () => client.refetchQueries({include: [GET_PRODUCTS]})
    const refreshSingleProduct = () => updateInfo.client.refetchQueries({include: [GET_SINGLE_PRODUCT]})

    const thisDelete = () => {
        deleteProduct({variables: {idProduct: product.idProduct}})
            .then(refreshProducts)
            .catch(console.error)
    }

    const renderActionBtns = () => (
        <div className={styles.btn_box}>
            <button disabled={loading} onClick={redirect}>{'подробнее...'}</button>
            <button disabled={loading} onClick={thisDelete}>X</button>
        </div>
    )

    const onEditPrice = () => {
        setEditPriceValue(product.price ?? 0)
        setEditingPrice(true)
    }
    const onEditDescription = () => {
        setEditDescriptionValue(product.description ?? '')
        setEditingDescription(true)
    }
    const skipEditPrice = () => {
        setEditPriceValue(product.price ?? 0)
        setEditingPrice(_ => false)
    }
    const skipEditDescription = () => {
        setEditDescriptionValue(product.description ?? '')
        setEditingDescription(_ => false)
    }
    const skipEditing = () => {
        if (editingPrice) skipEditPrice()
        if (editingDescription) skipEditDescription()
    }

    const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numbers = e.target.value?.match(/\d+/g);
        if (!numbers) return
        const value = Number(numbers[0].slice(0, 9));
        setEditPriceValue(value)
    }

    const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => setEditDescriptionValue(e.target.value)

    const updateSingleProduct = (variables: OperationVariables) => {
        updateProduct({variables})
            .then(refreshSingleProduct)
            .then(skipEditing)
            .catch(console.error)
    }

    const thisUpdate = () => {
        const variables: Product = {...product}
        variables.price = editPriceValue ? editPriceValue : variables.price ?? 0
        variables.description = editDescriptionValue ? editDescriptionValue : variables.description ?? ''

        updateSingleProduct(variables)
    }

    return (
        <div className={classes(styles.container, home ? undefined : styles._column)}>
           <span className={styles.name}>{product.name}</span>
            {
                home ? renderActionBtns() : <>
                    <span className={styles.property}>
                        <EditButton disabled={updateInfo.loading} action={onEditPrice}/>
                        {
                            editingPrice
                                ? <div className={styles.edit_box}>
                                    <input
                                        style={{maxWidth: 125}}
                                        max={99999999} min={0}
                                        type="number"
                                        value={editPriceValue}
                                        onChange={onPriceChange}
                                    />
                                    <SaveButton disabled={updateInfo.loading} action={thisUpdate}/>
                                    <CancelButton disabled={updateInfo.loading} action={skipEditPrice}/>
                                </div>
                                : <span className={styles.property_value}>
                                    Цена:
                                    <div>{product.price ? product.price : '-'}</div>
                                </span>
                        }
                    </span>
                    <span className={styles.property}>
                        <EditButton disabled={updateInfo.loading} action={onEditDescription}/>
                        {
                            editingDescription
                                ?  <div className={styles.edit_box}>
                                    <input
                                        type="text"
                                        value={editDescriptionValue}
                                        onChange={onDescriptionChange}
                                    />
                                    <SaveButton disabled={updateInfo.loading} action={thisUpdate}/>
                                    <CancelButton disabled={updateInfo.loading} action={skipEditDescription}/>
                                </div>
                                : <span className={styles.property_value}>
                                    <div>Описание:</div>
                                    <div>{product.description ? product.description : '-'}</div>
                                </span>
                        }
                    </span>
                </>
            }
        </div>
    )
}