require('node:dns').setServers(['1.1.1.1', '8.8.8.8']);
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {createTodo,allTodos,deletUser,updateData } = require('./controllers/todoControllers.js')
const cors = require('cors')



app.use(express.json());
app.use(cors())


 mongoose.connect('mongodb+srv://mesbaul:MesbaulHaque@cluster0.e8wo0rw.mongodb.net/todo?appName=Cluster0').then(()=>{
  console.log("Database Connect");
  
})


app.post('/create/todo',createTodo)
app.get('/allTodos',allTodos)
app.delete('/deletUser/:id', deleteTodos);
app.post('/updateData/:id', upload.single('image'), updateData);


app.listen(3000,()=>{
  console.log("Server is running")
})