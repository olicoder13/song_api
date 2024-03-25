const express = require('express');
const router = express.Router();
const songsRouter = require('./song.router.js')

// colocar las rutas aquí
router.use('/songs', songsRouter)


module.exports = router;