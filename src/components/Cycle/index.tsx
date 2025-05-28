import styles from './styles.module.css'

type CycleProps = {
    color: 'red' | 'green' | 'blue'
    text: string
}


export function Cycle({ color, text }: CycleProps) {
    return (
        <div className={`${styles.cycle} ${styles[color]}`}>
            {text}
        </div>
    )
}