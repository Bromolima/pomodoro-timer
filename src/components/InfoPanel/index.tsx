import styles from './styles.module.css'

export function InfoPanel() {
    return (
        <div className={styles.infoPanel}>
            <p className={styles.title}>Progresso do dia</p>
            <div className={styles.info}>
                <p>Ciclos completos</p>
                <p>0</p>
            </div>

            <div className={styles.info}>
                <p>Sessões Totais</p>
                <p>0</p>
            </div>

            <div className={styles.info}>
                <p>Tempo de foco</p>
                <p>0</p>
            </div>
        </div>
    )
}