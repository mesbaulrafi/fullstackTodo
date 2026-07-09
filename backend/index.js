require('node:dns').setServers(['1.1.1.1', '8.8.8.8']);
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {createTodo,allTodos } = require('./controllers/todoControllers.js')
const cors = require('cors')



app.use(express.json());
app.use(cors())




app.post('/create/todo',createTodo)
app.get('/allTodos',allTodos)


app.listen(3000,()=>{
  console.log("Server is running")
})