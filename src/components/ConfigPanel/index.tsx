import { ConfigButton } from '../Buttons/ConfigButton'
import styles from './styles.module.css'

export function ConfigPanel() {
    return (
        <div className={styles.configPanel}>
            <p className={styles.title}>Configurações</p>
            <div className={styles.info}>
                <p>Duração do trabalho</p>
                <p>0</p>
            </div>

            <div className={styles.info}>
                <p>Descanso curto</p>
                <p>0</p>
            </div>

            <div className={styles.info}>
                <p>Descanso longo</p>
                <p>0</p>
            </div>

            <ConfigButton />
        </div>
    )
}