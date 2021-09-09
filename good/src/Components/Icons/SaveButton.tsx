import React from 'react'
import styles from './Icons.module.css'
import {classes} from '../../Utils'

interface SaveButtonProps {
    action: () => void
    disabled?: boolean
}

export const SaveButton: React.FC<SaveButtonProps> = ({action, disabled}) => (
    <div onClick={disabled ? undefined : action} className={classes(styles.container, disabled ? styles._disabled : undefined)}>
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 390.762 390.762">
            <path d="M210.381,195.84V86.991h-30v109.305l-26.771-26.338l-21.04,21.385l51.834,50.996c2.918,2.871,6.718,4.308,10.521,4.308
                    c3.757,0,7.517-1.404,10.425-4.216l52.746-50.996l-20.852-21.568L210.381,195.84z"/>
            <path d="M308.381,0h-226C36.956,0,0,36.956,0,82.381v207.81v18.675c0,45.158,36.738,81.896,81.896,81.896h226.97
                    c45.157,0,81.896-36.738,81.896-81.896v-3.675v-15V82.381C390.762,36.956,353.806,0,308.381,0z M308.866,360.762H81.896
                    c-24.728,0-45.471-17.383-50.651-40.571h328.272C354.337,343.379,333.594,360.762,308.866,360.762z M30,290.19V82.381
                    C30,53.498,53.498,30,82.381,30h226c28.883,0,52.381,23.498,52.381,52.381v207.81H30z"/>
        </svg>
    </div>
)