import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppointmentService } from "../../context/AppointmentServiceContext/AppointmentServiceContext";
import { getAppointment } from "../../services/appointments";

import ProcessingServiceCard from "../../components/ProcessingServiceCard/ProcessingServiceCard";
import ReceptionServiceCard from "../../components/ReceptionServiceCard/ReceptionServiceCard";
import AppointmentsTable from "../../components/AppointmentsTable/AppointmentsTable";

function ServiceHistory() {
  const { appointmentData, setAppointmentData } = useAppointmentService();
  const { id: appointmentID } = useParams();

  useEffect(() => {
    async function getAppointmentData() {
      try {
        const currentAppointmentData = await getAppointment(appointmentID);
        setAppointmentData(currentAppointmentData);
      } catch (error) {
        console.error("Error fetching appointment data:", error);
      }
    }
    getAppointmentData();
  }, [appointmentID]);

  return (
    <div className="container">
      <h3>Appointment Details</h3>
      <AppointmentsTable appointmentsList={[appointmentData]} linkToAppointment={false} />
      <div className="container d-flex justify-content-center">
        <div className="w-100 mx-3">
          <ReceptionServiceCard receptionServiceData={appointmentData?.receptionServiceHistory} />
        </div>
        <div className="w-100 mx-3">
          <ProcessingServiceCard
            receptionServiceData={appointmentData?.receptionServiceHistory}
            processingServiceData={appointmentData?.processingServiceHistory}
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceHistory;
