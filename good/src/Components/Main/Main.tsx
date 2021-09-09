import React from 'react'
import styles from './Main.module.css'

export const Main: React.FC = ({children}) => (
    <div className={styles.layout}>{children}</div>
)