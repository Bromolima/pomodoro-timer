import { PlayIcon, RotateCcwIcon, StopCircleIcon, } from 'lucide-react'
import { DefaultButton } from '../Buttons/DefaultButton'
import { Cowntown } from '../Countdown'
import styles from './styles.module.css'
import { Cycle } from '../Cycle'
import { DefaultInput } from '../DefaultInput'
import { useRef } from 'react'
import { ProgressBar } from '../ProgressBar'
import type { TaskModel } from '../../models/taskModels'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNexCycle'
import { getNextCycleType } from '../../utils/getNextCycleType'
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes'
import { getTimePercentage } from '../../utils/getTimePercentage'
import { TaskActionTypes } from '../../contexts/TaskContext/taskAction'

export function TimerMenu() {
    const { state, dispatch } = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null) 

    const nextCycle = getNextCycle(state.currentCycle)
    const nextCycleType = getNextCycleType(nextCycle)
    const progress = getTimePercentage(state.secondsRemaining, state.config[nextCycleType])

    
    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        
        if (!taskNameInput.current) return

        const taskName = taskNameInput.current.value.trim()

        if (!taskName) {
            alert('Digite o nome da tarefa')
            return 
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType
        }

        dispatch({type: TaskActionTypes.START_TASK,  payload: newTask})
    }

    function handleInterruptTask(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        // e.preventDefault()// Corrigido: chamada correta da função
        // setState(prevState => {
        //     return {
        //         ...prevState,
        //         activeTask: null,
        //         secondsRemaining: 0,
        //         formattedSecondsRemaining: '00:00',
        //         tasks: prevState.tasks.map(task => {
        //             if (prevState.activeTask?.id === task.id) {
        //                 return {...task, interruptDate: Date.now()}
        //             }
        //             return task
        //         })
        //     }
        // })
    }

    return (
        <form 
            onSubmit={handleCreateNewTask} 
            className={styles.timerMenu} 
            action=''
        >
            {state.currentCycle > 0 && (
                <Cycle />
            )}

            <Cowntown />

            <DefaultInput
                id='myInput'
                type='text'
                ref={taskNameInput}
                placeholder='Digite algo'
                disabled={!!state.activeTask}
            />

            <ProgressBar value={progress} cycleType={nextCycleType} />

            <div className={styles.buttons}>
                {!state.activeTask ? (
                    <DefaultButton
                        title='Iniciar nova tarefa'
                        icon={<PlayIcon />} 
                        type='submit'
                        color='green'
                        key='submit_button'
                    />
                ) : (
                    <DefaultButton
                        title='Iniciar nova tarefa'
                        icon={<StopCircleIcon />} 
                        type='button'
                        color='red'
                        onClick={handleInterruptTask}
                        key='interrupt_task'
                    />
                )}

                <DefaultButton 
                    icon={<RotateCcwIcon />} 
                    color='yellow' 
                />
            </div>
        </form>
    )
}