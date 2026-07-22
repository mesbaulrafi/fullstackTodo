const Todo = require('../models/todoModel');

// Create Todo
const createTodo = async (req, res) => {
  try {
    const { task, priority } = req.body;

    if (!task || !priority) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all the fields',
      });
    }

    const todo = new Todo({
      task,
      priority,
    });

    await todo.save();

    res.status(201).json({
      success: true,
      message: 'Todo Created Successfully',
      data: todo,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

// Get All Todos
const allTodos = async (req, res) => {
  try {
    const data = await Todo.find({});

    res.status(200).json({
      success: true,
      message: 'Todos Collected Successfully',
      data,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

// Delete Todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: 'Todo Not Found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Todo Deleted Successfully',
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

// Update Todo
const updateData = async (req, res) => {
  try {
    const { id } = req.params;
    const updatePayload = { ...req.body };

    if (req.file) {
      updatePayload.image = req.file.path;
    }

    const updatedTodo = await Todo.findByIdAndUpdate(id, updatePayload, {
      new: true,
      runValidators: true,
    });

    if (!updatedTodo) {
      return res.status(404).json({
        success: false,
        message: 'Todo Not Found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Todo Updated Successfully',
      data: updatedTodo,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

module.exports = { createTodo, allTodos, deleteTodo, updateData };