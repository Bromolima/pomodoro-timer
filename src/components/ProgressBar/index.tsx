import styles from './styles.module.css'

type ProgressBarProps = {
  value?: number
  cycleType?: 'workTime' | 'shortBreakTime' | 'longBreakTime'
}

export function ProgressBar({ value, cycleType }: ProgressBarProps) {

    let color = ''
    if (cycleType === 'workTime') color = 'var(--error)'
    if (cycleType === 'shortBreakTime') color = 'var(--success)'
    if (cycleType === 'longBreakTime') color = 'var(--info)'

    return (
        <div
            className={`${styles.progressBar}`}
            style={{
                background: `linear-gradient(
                to right,
                ${color} ${value}%,
                var(--gray-700) ${value}%
                )`,
            }}
        />
    )
}