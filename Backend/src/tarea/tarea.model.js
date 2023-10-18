'use strict'

const mongoose = require('mongoose')

const tareaSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true

    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    priority: {
        type: Number,
        required: true
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('TAREA', tareaSchema);
