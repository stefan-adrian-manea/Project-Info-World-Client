import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAppointments } from "../../services/appointments";

function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointmentsData() {
      try {
        const appointmentsData = await getAppointments();
        setAppointments(appointmentsData.reverse());
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    }
    fetchAppointmentsData();
  }, []);

  return (
    <div>
      <h2>Appointment List</h2>
      {appointments.map((appointment) => (
        <div key={appointment.id} style={{ marginBottom: "20px" }}>
          <div>Interval: {appointment.interval}</div>
          <div>Name: {appointment.clientName}</div>
          <div>Contact: {appointment.contact}</div>
          <div>Car: {appointment.car}</div>
          <div>Action: {appointment.action}</div>
          <Link to={`/history-service/${appointment.id}`}>Appointment Details</Link>
        </div>
      ))}
    </div>
  );
}

export default AppointmentsList;
