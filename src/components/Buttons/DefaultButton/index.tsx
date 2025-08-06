import styles from './styles.module.css'

type DefaultButtonProps = {
    icon: React.ReactNode
    color?: 'green' | 'red' | 'yellow'
} & React.ComponentProps<'button'>

export function DefaultButton({ icon, color = 'green', type='button', ...props }: DefaultButtonProps) {
    return (
        <button className={`${styles.button} ${styles[color]}`} type={type} {...props}>
            {icon}
        </button>
    )
}