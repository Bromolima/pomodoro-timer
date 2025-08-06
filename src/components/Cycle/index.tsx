import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import styles from './styles.module.css'
import { getNextCycleType } from '../../utils/getNextCycleType'

export function Cycle() {
    const { state } = useTaskContext()
    const cycleType = getNextCycleType(state.currentCycle)

    let message = ''
    if (cycleType === 'workTime') message = 'Hora de foco'
    if (cycleType === 'shortBreakTime') message = 'Descanso curto'
    if (cycleType === 'longBreakTime') message = 'Descanso longo'

    return (
        <div className={`${styles.cycle}`}>
            {message}
        </div>
    )
}