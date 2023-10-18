import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AddTarea } from './AddTarea'

export const Tarea = () => {
  const [tarea, setTarea] = useState([{}])

  //obtener tareas
  const getTareas = async () => {
    try {
      const { data } = await axios.get('http://localhost:3000/tarea/get')
      if (data.tarea) {
        setTarea(data.tarea)
      }
    } catch (error) {
      console.log(error)
    }
  }

  //eliminar tareas
  const deleteTareas = async (_id) => {
    try {
      const { data } = await axios.delete(`http://localhost:3000/tarea/delete/${_id}`)
      alert(data.message)
      getTareas()
    } catch (error) {

    }
  }

  useEffect(() => { getTareas() }, [])
  return (
    <>
      <div>

        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">NO.</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Fecha</th>
              <th scope="col">Prioridad</th>
              <th scope='col'>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {
              tarea.map(({ _id, name, description, date, priority }, i) => {
                return (
                  <tr key={i}>
                    <td>{++i}</td>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{date}</td>
                    <td>{priority}</td>
                    <td> <button onClick={() => deleteTareas(_id)}>Si</button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

      <AddTarea></AddTarea>
    </>
  )
}
