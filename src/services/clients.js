import axios from "axios";

const API_URL = "http://localhost:4000/clients"; // json-server --watch db.json --port 4000
// const API_URL = "http://localhost:4001/clients"; // api from : https://github.com/stefann9/Project-Info-World-server


export const getClients = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export async function getClient(id) {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const addClient = async (client) => {
  try {
    const response = await axios.post(`${API_URL}`, client);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateClient = async (clientId, updatedClientData) => {
  try {
    const response = await axios.put(`${API_URL}/${clientId}`, updatedClientData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export async function deleteClient(clientId) {
  try {
    const response = await axios.delete(`${API_URL}/${clientId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


