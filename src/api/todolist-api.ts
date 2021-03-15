import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'ead95c9c-3750-4876-9174-65908965d2c9'
    }
})

type CommonResponseType<T> = {
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
    data: T
}

export type GetTodoType = {
    id: string
    title: string
    addedDate: string
    order: number
}


export const todolistApi = {
    getTodolist() {
        return instance.get<Array<GetTodoType>>('todo-lists')
    },

    createTodolist(title: string) {
      return instance.post<CommonResponseType<{ item: GetTodoType }>>('todo-lists',
          {title})
    },

    deleteTodolist(todolistId: string) {
      return instance.delete<CommonResponseType<{}>>(`todo-lists/${todolistId}`,
          )
    },

    updateTodolist(todolistId:string, title: string) {
       return instance.put<CommonResponseType<{}>>(`todo-lists/${todolistId}`,
           {title})
    }
}