import express from 'express';
import { getItem, getItems,createItem,updateItem,deleteItem } from './controllers.js';

const router = express.Router();

router.get('/',getItems)
router.get('/:id',getItem)
router.post('/',createItem);
router.patch('/:id',updateItem);
router.delete('/:id',deleteItem);

export default router;