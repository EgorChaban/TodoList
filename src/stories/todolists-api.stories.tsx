import React, {useEffect, useState} from 'react'
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': 'ead95c9c-3750-4876-9174-65908965d2c9'
    }

}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodolist()
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const title = 'newTodolist'
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.createTodolist(title)
            .then( (res) => {
            setState(res.data);
        } )

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const todolistId = 'c05bc826-3823-4241-b343-14bd7f7abc7a'
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.deleteTodolist(todolistId)
            .then( (res) => {
            setState(res.data);
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const todolistId = '292ffb60-d280-49f1-9ec6-7650e0c09f95'
    const title = 'REACT>>>>>>>>>'
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.updateTodolist(todolistId, title)
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
