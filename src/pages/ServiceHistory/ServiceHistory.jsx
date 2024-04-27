import {  useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useAppointmentService } from "../../context/AppointmentServiceContext/AppointmentServiceContext";
import { getAppointment } from "../../services/appointments";

import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import ProcessingServiceCard from "../../components/ProcessingServiceCard/ProcessingServiceCard";
import ReceptionServiceCard from "../../components/ReceptionServiceCard/ReceptionServiceCard";

function ServiceHistory() {
  const { appointmentData, setAppointmentData } = useAppointmentService();
  const { id: appointmentID } = useParams();

  const currentPath = window.location.pathname;
  
  useEffect(() => {
    async function fetchAppointmentData() {
      try {
        const currentAppointmentData = await getAppointment(appointmentID);
        setAppointmentData(currentAppointmentData);
      } catch (error) {
        console.error("Error fetching appointment data:", error);
      }
    }
    fetchAppointmentData();
  }, [appointmentID, appointmentData]);
  
  return (
    <div>
      <h3>Appointment Details</h3>
      <AppointmentCard appointment={appointmentData} showDetailsLink={false} />
      <ReceptionServiceCard receptionServiceData={appointmentData?.receptionServiceHistory} />
      <ProcessingServiceCard processingServiceData={appointmentData?.processingServiceHistory} />
      <Link to={`${currentPath}/reception`}>
        <span>Reception car</span>
      </Link>
      <Link to={`${currentPath}/processing`}>
        <span>Processing car</span>
      </Link>
    </div>
  );
}

export default ServiceHistory;
