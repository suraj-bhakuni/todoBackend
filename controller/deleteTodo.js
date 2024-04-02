//import Model
const Todo = require("../models/Todo");

//define Route handler
exports.deleteTodo = async (req, res) => {
    try{
        const {id} = req.params;

        await Todo.findByIdAndDelete(id);

        res.json({
            success : true,
            message : "Todo Deleted",
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