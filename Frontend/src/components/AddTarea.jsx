import axios from 'axios'
import React, { useState } from 'react'

export const AddTarea = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    date: '',
    priority: ''
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  //agregar tarea
  const agregarTarea = async (e) => {
    try {
      e.preventDefault()
      const { data } = await axios.post('http://localhost:3000/tarea/add', form)
      console.log(form)
      alert(data.message)
    } catch (err) {
      console.log(err)
      alert(err.response.data.message)
    }
  }

  return (
    <>
      <div>
        <form>
          <h3>Nombre</h3>
          <input type="text" name='name' onChange={handleChange}></input>
          <h3>Descripcion</h3>
          <input type="text" name='description' onChange={handleChange}></input>
          <h3>Fecha</h3>
          <input type="date" name='date' onChange={handleChange}></input>
          <h3>Prioridad</h3>
          <input type="number" name='priority' min={1} max={10} onChange={handleChange}></input>
          <tr />
          <button onClick={(e) => agregarTarea(e)} type='submit'>Guardar Tarea</button>
        </form>
      </div>
    </>
  )
}

