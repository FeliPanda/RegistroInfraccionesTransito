const express = require('express');
const path = require('path');
const personasRouter = require('./back/routes/personas.router.js');
const vehiculosRouter = require('./back/routes/vehiculos.routes.js');
const oficialesRoutes = require('./back/routes/oficiales.routes.js');

const app = express();

const PORT = 3000

app.use(express.json()); // middleware body para que el servidor pueda recibir info desde una URL
app.use(express.urlencoded({ extended: true })); //Middleware para recibir parametros por URL
//Middleware para servir archivos estaticos
app.use(express.static(path.join(__dirname, 'front', 'index.html')));

//endpoint para personas
app.post('/personas', () => {
    let { nombre, correoElectronico } = req.body;
    personas.push({ nombre, correoElectronico });
    res.json({ nombre: nombre, correoElectronico: correoElectronico });
    console.log(personas);
})


app.use('/', personasRouter)//nombre de la constante de arriba que se importa) //aqui debo poner la raiz y llamar el nombre del archivo
app.use('/', vehiculosRouter)
app.use('/', oficialesRoutes)


app.listen(port, () => {
    console.log(`Server running on port ${PORT}`);
})
