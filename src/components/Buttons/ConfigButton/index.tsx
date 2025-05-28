import { Settings } from 'lucide-react'
import styles from './styles.module.css'

export function ConfigButton() {
    return (
        <button className={styles.button}>
            {<Settings />}
        </button>
    )
}