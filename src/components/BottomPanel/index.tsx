import { ConfigPanel } from '../ConfigPanel'
import { InfoPanel } from '../InfoPanel'
import styles from './styles.module.css'

export function BottomPanel() {
    return (
        <div className={styles.bottomPanel}>
            <InfoPanel />
            <ConfigPanel />
        </div>
    )
}