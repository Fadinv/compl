import React from 'react'
import styles from './Header.module.css'
import {CreateProductForm} from '../CreateProductForm/CreateProductForm'

interface HeaderProps {
}

export const Header: React.FC<HeaderProps> = () => {
    return (
        <div className={styles.container}>
            <span className={styles.title}>Список покупок</span>
            <CreateProductForm/>
        </div>
    )
}