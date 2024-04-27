import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAppointment } from "../../services/appointments";


import AppointmentCard from "../../components/AppointmentCard/AppointmentCard";
import ProcessingServiceCard from "../../components/ProcessingServiceCard/ProcessingServiceCard";
import ReceptionServiceCard from "../../components/ReceptionServiceCard/ReceptionServiceCard";
function ServiceHistory() {
  const currentPath = window.location.pathname;
  const [appointmentData, setAppointmentData] = useState({});
  const { id: appointmentID } = useParams();

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
  }, [appointmentID]);
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
