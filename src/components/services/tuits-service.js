// declares the CRUD operations on the client side

import axios from 'axios';   // programmatically sends and receives HTTP requests
//const TUITS_API = 'http://localhost:4000/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
console.log(API_BASE);
const TUITS_API = `${API_BASE}/tuits`;

//const TUITS_API = 'https://rosanwang-web-dev-server.herokuapp.com/api/tuits';

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}

export const deleteTuit = async (tuit) => {
    const response = await axios
        .delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
}

export const updateTuit = async (tuit) => {
    console.log(tuit);
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}
