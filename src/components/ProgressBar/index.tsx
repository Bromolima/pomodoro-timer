import styles from './styles.module.css'

type ProgressBarProps = {
    value?: number,
}

export function ProgressBar({ value = 50 }: ProgressBarProps) {
    return (
        <div className={styles.container}>
            <div 
                className={styles.progressBar}
                style={{width: `${value}%`}}
            />
        </div>
    )
}