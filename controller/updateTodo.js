//import Model
const Todo = require("../models/Todo");

//define Route handler
exports.updateTodo = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, description} = req.body;

        const todo = await Todo.findByIdAndUpdate(
            {_id : id},
            {title, description, updatedAt : Date.now()}
        );

        res.status(200).json({
            success : true,
            data : todo,
            message : `Updated successfully `
        })
    }

    catch(error){
        console.error(err);
        res.status(500)
        .json({
            success : false,
            error : error.message,
            message : "Internal server error"
        })
    }
}