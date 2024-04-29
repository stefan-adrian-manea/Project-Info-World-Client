import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useClient } from "../../hooks/useClient.hook";
import { getAppointments } from "../../services/appointments";

import ClientsTable from "../../components/ClientsTable/ClientsTable";
import CarsTable from "../../components/CarsTable/CarsTable";
import AppointmentsTable from "../../components/AppointmentsTable/AppointmentsTable";
import "./ClientView.css";

function ClientView() {
  const { handleGetClient, client, carsList } = useClient();
  const { id: clientID } = useParams();
  const [clientAppointments, setClientAppointments] = useState([]);

  useEffect(() => {
    handleGetClient(clientID);
  }, [clientID]);

  useEffect(() => {
    async function getClientAppointments() {
      try {
        const appointmentsData = await getAppointments();
        const filteredAppointments = appointmentsData.filter(
          (appointment) => appointment.clientID === clientID
        );
        setClientAppointments(filteredAppointments);
      } catch (error) {
        console.error("Error fetching client appointments:", error);
      }
    }
    getClientAppointments();
  }, [clientID]);
  return (
    <div className="container client-view-container">
      <h2>Client info</h2>
      <ClientsTable clientsList={[client]} isEditing={true} />
      <h2>Cars</h2>
      <CarsTable carsList={carsList} />

      {clientAppointments.length !== 0 && (
        <>
          <h2>Appointments</h2>
          <AppointmentsTable appointmentsList={clientAppointments} linkToAppointment={true} />
        </>
      )}
    </div>
  );
}

export default ClientView;
