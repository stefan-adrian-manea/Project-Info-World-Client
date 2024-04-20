import axios from "axios";

const API_URL = "http://localhost:4000/clients"; 


export const addClient = async (clientData) => {
  try {
    
    const response = await axios.post(`${API_URL}`, clientData);
    return response.data; 
  } catch (error) {
    throw new Error("Eroare la adăugarea clientului"); 
  }
};


export const getClients = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    throw new Error("Nu s-a putut obține lista de clienți.");
  }
};

export async function checkDuplicateEmail(email) {
  try {
    const response = await axios.get(`${API_URL}?email=${email}`);
    return response.data.length > 0; 
  } catch (error) {
    throw new Error("Eroare la verificarea adresei de email");
  }
}
