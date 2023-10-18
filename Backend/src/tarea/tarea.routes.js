'use strict'

const express = require('express');
const api = express.Router();
const tareaController= require('./tarea.controller');

api.get('/get', tareaController.get)
api.get('/getId/:id',  tareaController.getById)
api.post('/add', tareaController.add)
api.put('/update/:id',  tareaController.update)
api.delete('/delete/:id', tareaController.delete)
module.exports = api;
