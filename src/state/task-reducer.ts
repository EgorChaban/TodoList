import {TasksStateType} from '../App';
import {v1} from 'uuid';

import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    taskId: string,
    todolistId: string

}
export type addTaskACType = {
    type: 'ADD-TASK',
    title: string,
    todolistId: string
}
export type changeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS',
    taskId: string,
    isDone: boolean,
    todolistId: string
}
export type changeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE',
    taskId: string,
    title: string
    todolistId: string
}

let initialState:TasksStateType = {}

type ActionsType = RemoveTaskActionType
    | addTaskACType
    | changeTaskStatusActionType
    | changeTaskTitleActionType
    | AddTodolistActionType
    | RemoveTodolistActionType

export const tasksReducer = (state = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {

        case 'REMOVE-TASK': {
            let copyState = {...state}
            copyState[action.todolistId] = copyState[action.todolistId].filter(task => task.id !== action.taskId)
            return copyState
        }

        case 'ADD-TASK': {
            let task = {id: v1(), title: action.title, isDone: false}
            return {
                ...state,
                [action.todolistId]: [task, ...state[action.todolistId]]
            }
        }

        case 'CHANGE-TASK-STATUS': {
            return {
                ...state,
                [action.todolistId]:
                    state[action.todolistId]
                        .map(task => {
                            if (task.id !== action.taskId) {
                                return task
                            } else {
                                return {...task, isDone: action.isDone}
                            }
                        })
            }
        }

        case "CHANGE-TASK-TITLE": {
            return {
                ...
                    state,
                [action.todolistId]:
                    state[action.todolistId]
                        .map(task => {
                            if (task.id !== action.taskId) {
                                return task
                            } else {
                                return {...task, title: action.title}
                            }
                        })
            }
        }

        case 'ADD-TODOLIST': {
            return {
                ...state,
                [action.todolistId]: []
            }
        }

        case 'REMOVE-TODOLIST': {
            let copyState = {...state}
            delete copyState[action.id]
            return copyState
        }


        default:
            return state
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId, todolistId}
}
export const addTaskAC = (title: string, todolistId: string): addTaskACType => {
    return {type: 'ADD-TASK', title, todolistId}
}
export const changeTaskStatusAC = (taskId: string, isDone: boolean, todolistId: string): changeTaskStatusActionType => {
    return {
        type: 'CHANGE-TASK-STATUS',
        taskId, isDone, todolistId
    }
}
export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): changeTaskTitleActionType => {
    return {
        type: 'CHANGE-TASK-TITLE',
        taskId, title, todolistId
    }
}
