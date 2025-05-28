import type { TaskModel } from './taskModels'

export type TaskStateModel = {
    tasks: TaskModel[];
    secondRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: TaskModel | null;
    currentCycle: number;
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    }
}