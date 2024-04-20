import axios from "axios";

const API_URL = "http://localhost:4000/clients";

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

export const addClient = async (clientData) => {
  try {
    const response = await axios.post(`${API_URL}`, clientData);
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

export async function checkDuplicateEmail(email) {
  try {
    const response = await axios.get(`${API_URL}?email=${email}`);
    return response.data.length > 0;
  } catch (error) {
    console.error(error);
  }
}
