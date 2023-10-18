'use strict'

const Tarea= require('./tarea.model');

exports.add = async (req, res) => {
    try {
        let data = req.body;
        let tareaExist= await Tarea.findOne({ name: data.name });
        if (tareaExist) return res.status(404).send({ message: 'tarea existente' })
        let tarea = new Tarea(data);
        await tarea.save();
        return res.send({ message: 'tarea creado con éxito', tarea});
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error al crear su tarea' })
    }
}

exports.get = async (req, res) => {
    try {
        let tarea = await Tarea.find();
        return res.send({ message: 'Tareas encontradas', tarea });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error al obtener la tarea' });
    }
}


exports.getById = async(req, res)=>{
    try {
        let tareaId = req.params.id;
        let tarea= await Tarea.findOne({_id: tareaId});
        if(!tarea) res.status(404).send({message: 'Work not found'})
        return res.send({message: 'Work found', tarea})
    } catch (err) {
        console.error(err)
        return res.status(500).send({message: 'Error searching work'})
    }
}

exports.update = async (req, res) => {
    try {
        let tareaId = req.params.id;
        let data = req.body;
        let updateTarea = await Tarea.findOneAndUpdate(
            { _id: tareaId },
            data,
            { new: true }
        )
        if (!updateTarea) return res.send({ message: 'Tarea no encontrado' });
        return res.send({ message: 'Tarea updated successfully ', updateTarea });
    } catch (err) {
        console.error(err);
        return res.status(500).send({ message: 'Error updating' });
    }
}

exports.delete = async(req, res)=>{
    try{
        let tareaId = req.params.id;
        //Eliminar
        let tareaDeleted = await Tarea.findOneAndDelete({_id: tareaId });
        if(!tareaDeleted) return res.send({message: 'Work not found and not deleted'});
        return res.send({message: "Work deleted sucessfully"});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: 'Error not deleted'});
    }
}