import axios from "axios";

const API_URL = "http://localhost:4000/appointments"; // json-server --watch db.json --port 4000
// const API_URL = "http://localhost:4001/appointments"; // api from : https://github.com/stefann9/Project-Info-World-server

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



export const updateAppointment = async (appointmentId, updatedAppointmentData) => {
  try {
    const response = await axios.put(`${API_URL}/${appointmentId}`, updatedAppointmentData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
