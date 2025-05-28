import styles from './styles.module.css'
import { TimerIcon } from "lucide-react";

export function Logo() {
    return (
        <div className={styles.logo}>
            <TimerIcon />
            <h1>Pomodoro Timer</h1>
        </div>
    )
}