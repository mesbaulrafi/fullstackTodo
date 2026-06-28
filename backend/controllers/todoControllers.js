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



module.exports = {createTodo}