import type { TaskStateModel } from "../../models/taskStateModel"

export const initialTaskState: TaskStateModel = {
    tasks: [],
    secondRemaining: 0,
    formattedSecondsRemaining: '22:00',
    activeTask: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 15
    }
}