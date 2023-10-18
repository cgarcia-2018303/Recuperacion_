import React, { useEffect, useState } from 'react'
import { Tarea } from './components/Tarea'
import axios from 'axios'

export const Home = () => {
    const [user, setUser] = useState({})

    //lamada a la api
    const getUsuario = async () => {
        try {
            const { data } = await axios.get('https://randomuser.me/api/?inc=name')
            if (data.results.length > 0) {
                setUser(data.results[0].name)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => { getUsuario() }, [])

    return (
        <>
            <div>
                <h1>Hola</h1> <h2> {user.first}</h2>
                <button onClick={getUsuario}>Cambiar nombre</button>
            </div>
            <Tarea></Tarea>
        </>
    )
}
