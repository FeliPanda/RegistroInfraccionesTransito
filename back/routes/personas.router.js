const express = require('express');
const router = express.Router();

//get
router.get('/personas', (req, res) => {
    res.json(personas)
}
)
//post

req.post('/', (req, res) => {
    const newPerson = req.body
})

//para exportar

module.exports = router;