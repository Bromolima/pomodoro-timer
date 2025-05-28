import React from 'react'
import styles from './styles.module.css'

type NavbarButtonProps = {
    icon?: React.ReactNode
} 

export function NavbarButton({ icon }: NavbarButtonProps) {
    const[buttonVisual, setButtonVisual] = React.useState('solid')
    
    function handleOnClick(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) {
        event.preventDefault()

        setButtonVisual(prevButtonVisual => {
            const nextButtonVisual = prevButtonVisual === 'transparent' ? 'solid' : 'transparent'
            return nextButtonVisual
        })
    }
    
    return (
        <button 
            className={`${styles.button} ${styles[buttonVisual]}`}
            onClick={handleOnClick}
        >
            {icon}
        </button>
    )
}