import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAppointments } from "../../services/appointments";

function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const appointmentsData = await getAppointments();
        setAppointments(appointmentsData.reverse());
      } catch (error) {
        console.error(error);
      }
    }
    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Lista programari</h2>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            <div>Interval: {appointment.interval}</div>
            <div>Nume: {appointment.clientName}</div>
            <div>Contact: {appointment.contact}</div>
            <div>Masina: {appointment.car}</div>
            <div>Actiune: {appointment.action}</div>
            <Link to={`/history-service/${appointment.id}`}>Detalii programare</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentsList;
