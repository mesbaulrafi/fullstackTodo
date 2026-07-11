const Todo = require('../models/todoModel')


const createTodo = (req,res)=>{
    const {task,status,priority} = req.body  


    if(!task || !priority){
        return res.send({
            success: false,

            massage: 'plase fill the all fields'
        })
    }

    const todo = new Todo ({
        task: task,
        priority: priority
    })

    todo.save()

    res.send({
        success:true,
        massage: 'Todo Created'

    })

}

const allTodos = async (req,res)=>{
    let data = await Todo.find({})
    res.send({
        success:true,
        message: "Todo Collected",
        data : data
    })
}

const deletUser = async (req,res)=>{
    const {id} = req.params
    await Todo.findByIdAndDelete(id)
    res.send('User Deleted')
}



const updateData = async (req, res) => {
    const { id } = req.params;
    const updateTask = await Todo.findByIdAndUpdate({_id:id},req.body)
    res.send({
        success: true,
        message: "Todo updated successfully"
    });
}

module.exports = {createTodo,allTodos,deletUser,updateData}