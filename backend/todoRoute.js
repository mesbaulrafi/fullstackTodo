const express = require('express');
const router = express.Router();
const upload = require('./utlis/storage');
const { createTodo, allTodos, deleteTodo, updateData } = require('./controllers/todoControllers.js');

router.post('/create/todo', createTodo);
router.get('/allTodos', allTodos);
router.delete('/deleteUser/:id', deleteTodo);
router.post('/updateData/:id', upload.single('image'), updateData);

module.exports = router;