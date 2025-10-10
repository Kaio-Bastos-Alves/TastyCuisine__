import axios from 'axios';

    const API_URL = 'http://localhost:8080/api/items'; // Replace with your actual API endpoint

    const getAllItems = () => {
        return axios.get(API_URL);
    };

    const getItemById = (Cod_user) => {
        return axios.get(`${API_URL}/${Cod_user}`);
    };

    const createItem = (data) => {
        return axios.post(API_URL, data);
    };

    const updateItem = (id, data) => {
        return axios.put(`${API_URL}/${id}`, data);
    };

    const deleteItem = (id) => {
        return axios.delete(`${API_URL}/${id}`);
    };

    export default {
        getAllItems,
        getItemById,
        createItem,
        updateItem,
        deleteItem,
    };