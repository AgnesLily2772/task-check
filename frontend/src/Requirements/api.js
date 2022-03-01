import axios from 'axios';

const url = "http://localhost:2772/todo"

export const getItems  = () => axios.get(url);

export const createItem = (newListItem) => axios.post(url,newListItem);

export const updateItem = (id, updatedItem) => axios.patch(`${url}/${id}`, updatedItem);

export const deleteItem = (id) => axios.delete(`${url}/${id}`);
