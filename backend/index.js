require('node:dns').setServers(['1.1.1.1', '8.8.8.8']);
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const multer = require('multer');
const {createTodo,allTodos,deletUser,updateData } = require('./controllers/todoControllers.js')
const cors = require('cors')



app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));


 mongoose.connect('mongodb+srv://mesbaul:MesbaulHaque@cluster0.e8wo0rw.mongodb.net/todo?appName=Cluster0').then(()=>{
  console.log("Database Connect");
  
})

// multer for images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        let uniqueName = 'img-' + Date.now();
        cb(null, uniqueName + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });


app.post('/create/todo',upload.single('image'),createTodo)
app.get('/allTodos',allTodos)
app.delete('/deletUser/:id', deletUser);
app.post('/updateData/:id', upload.single('image'), updateData);


app.listen(3000,()=>{
  console.log("Server is running")
})




// ==========================


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const multer = require('multer');
// const { createTodo, deleteTodos, updateData, allTodo } = require('./controller/todoController');

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use('/uploads', express.static('uploads'));

// mongoose.connect('mongodb+srv://666majharulislam_db_user:25250180@cluster0.nzekssh.mongodb.net/todo?appName=Cluster0')
//     .then(() => console.log('Database Connected'))


// // API Routes
// app.post('/createTodo',  createTodo);
// app.get('/allTodo', allTodo);
// app.delete('/deleteTask/:id', deleteTodos);
// app.post('/updateData/:id', upload.single('image'), updateData);