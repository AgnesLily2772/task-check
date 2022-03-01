import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    todo:String,
    status:String,
    priority:String
})

const ToDo = mongoose.model('ToDoList',todoSchema);
export default ToDo;