const express = require('express');
const route = express.Router();
const { alltasks, updateall, getone, addtask, deleteone }= require('../controller/controller')
route.use(express.json())

route.get('/',alltasks);
route.get('/:id',getone);
route.put('/:id',updateall)
// route.patch('/:id',updateone)
route.post('/',addtask)
route.delete('/:id',deleteone)

module.exports= route;