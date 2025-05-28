import styles from './styles.module.css'

type DefaultButtonProps = {
    icon: React.ReactNode
    color?: 'green' | 'red' | 'yellow'
} & React.ComponentProps<'button'>

export function DefaultButton({ icon, color = 'green', type='button' }: DefaultButtonProps) {
    return (
        <button className={`${styles.button} ${styles[color]}`} type={type}>
            {icon}
        </button>
    )
}