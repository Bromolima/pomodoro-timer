import type { TaskStateModel } from "../../models/taskStateModel";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";
import { getNextCycle } from "../../utils/getNexCycle";
import { TaskActionTypes, type TaskActionModel } from "./taskAction";

export function taskReducer(state: TaskStateModel, action: TaskActionModel) {
    switch(action.type) {
        case TaskActionTypes.START_TASK: {
            const newTask = action.payload
            const nextCycle = getNextCycle(state.currentCycle)
            const secondsRemaining = newTask.duration * 60

            return {
                ...state,
                activeTask: newTask,
                currentCycle: nextCycle,
                formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
                tasks: [...state.tasks, newTask],
            }
        }
    }


    return state
}