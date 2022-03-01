import express from 'express';
import ToDo from './models.js';
import mongoose from 'mongoose';

const router = express.Router();

export const getItems = async(req,res) => {
    try {
        const totodos = await ToDo.find();
        res.status(200).json(totodos);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
export const getItem = async(req,res) => {
    const {id} = req.params;
    try {
        const totodo = await ToDo.findById(id);
        res.status(200).json(totodo);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createItem = async(req,res) => {
    const {todo,status,priority} = req.body;
    const newListItem = new ToDo({todo,status,priority})
    try {
        await newListItem.save();
        res.status(200).json(newListItem);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const updateItem = async(req,res) => {
    const {id} = req.params;
    const {todo,status,priority} = req.body;
    if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No todo is found with id: ${id}`);
    const updatedItem = {todo,status,priority,_id:id};
    await ToDo.findByIdAndUpdate(id,updatedItem,{new:true});
    res.json(updatedItem);
}
export const deleteItem = async(req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No todo is found with id: ${id}`);
    await ToDo.findByIdAndRemove(id);
    res.json({message : "Todo item is deleted."})
}

export default router;