import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAppointments } from "../../services/appointments";
import  AppointmentCard  from "../../components/AppointmentCard/AppointmentCard";

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
      <h2>Appointments List</h2>
      {appointments.map((appointment) => (
        <AppointmentCard key={appointment.id} appointment={appointment} showDetailsLink={true} />
      ))}
    </div>
  );
}

export default AppointmentsList;
