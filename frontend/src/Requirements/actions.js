import * as api from './api';

export const getItems = async() => {
  try {
    const {data} = await api.getItems()
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const createItem = async(totodo) => {
  try {
    const {data} = await api.createItem(totodo)
    return data;
  } catch (error) {
    console.log(error);
  }
}
