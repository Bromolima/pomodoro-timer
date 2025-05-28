import { PlayIcon, RotateCcwIcon, SkipForwardIcon, } from 'lucide-react'
import { DefaultButton } from '../Buttons/DefaultButton'
import { Cowntown } from '../Countdown'
import styles from './styles.module.css'
import { Cycle } from '../Cycle'
import { DefaultInput } from '../DefaultInput'
import { useRef, useState } from 'react'
import { ProgressBar } from '../ProgressBar'
import type { TaskModel } from '../../models/taskModels'
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'

export function TimerMenu() {
    const { setState } = useTaskContext()
    const taskNameInput = useRef<HTMLInputElement>(null) 

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
            duration: 1,
            type: 'workTime' 
        }

        setState(prevState => {
            return {
                ...prevState,
                activeTask: newTask,
                currentCycle: 1,
            }
        })
    }

    return (
        <form onSubmit={handleCreateNewTask} className={styles.timerMenu} action=''>
            <Cycle color='blue' text='Sessão de Trabalho' />

            <Cowntown />

            <DefaultInput
                id='myInput'
                type='text'
                ref={taskNameInput}
                placeholder='Digite algo'
            />

            <ProgressBar />

            <div className={styles.buttons}>
                <DefaultButton
                    title='Iniciar nova tarefa'
                    icon={<PlayIcon />} 
                    type='submit'
                    key='submit_button'
                />

                <DefaultButton 
                    icon={<RotateCcwIcon />} 
                    color='yellow' 
                />

                <DefaultButton 
                    icon={<SkipForwardIcon />} 
                    color='red' 
                />
            </div>
        </form>
    )
}