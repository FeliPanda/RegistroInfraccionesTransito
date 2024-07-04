const express = require('express');



let personas = []
let vehiculos = []
let oficiales = []


//endpoint para personas
app.post('/personas', () => {
    let { nombre, correoElectronico } = req.body;
    personas.push({ nombre, correoElectronico });
    res.json({ nombre: nombre, correoElectronico: correoElectronico });
    console.log(personas);
})
