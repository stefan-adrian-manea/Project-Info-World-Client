import axios from "axios";

const API_URL = "http://localhost:4000/appointments";

export const getAppointment = async (appointmentId) => {
  try {
    const response = await axios.get(`${API_URL}/${appointmentId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addAppointment = async (newAppointment) => {
  try {
    const response = await axios.post(`${API_URL}`, newAppointment);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAppointments = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const addProcessingServiceHistory = async (appointmentId, processingData) => {
  try {
    const response = await axios.put(`${API_URL}/${appointmentId}`, processingData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const addReceptionServiceHistory = async (appointmentId, processingData) => {
  try {
    const response = await axios.put(`${API_URL}/${appointmentId}`, processingData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
