import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { getAppointment, addProcessingServiceHistory } from "../../../services/appointments";
import TextareaField from "../../../components/formComponents/TextareaField";
import InputField from "../../../components/formComponents/InputField";


const defaultForm = {
  partsChanged: "",
  operations: "",
  otherIssues: "",
  repairedOtherIssues: false,
  repairDuration: "",
};

function ProcessingServiceHistory() {
  const [processingServiceHistory, setProcessingServiceHistory] = useState(defaultForm);
  const { id: appointmentID } = useParams();
  const [appointmentData, setAppointmentData] = useState(null);
  const navigate = useNavigate();

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setProcessingServiceHistory({ ...processingServiceHistory, [name]: newValue });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      await addProcessingServiceHistory(appointmentID, {
        ...appointmentData,
        processingServiceHistory: processingServiceHistory,
      });
      setProcessingServiceHistory(defaultForm);
    } catch (error) {
      console.error("Error adding processing history:", error);
    }
    navigate(-1);
  };

  return (
    <div>
      <h3>Processing History</h3>
      <form onSubmit={handleForm}>
        <InputField
          id="partsChanged"
          name="partsChanged"
          label="Parts Changed"
          type="text"
          value={processingServiceHistory.partsChanged}
          onChange={handleChange}
          required
        />
        <TextareaField
          id="operations"
          name="operations"
          label="Operations Performed"
          value={processingServiceHistory.operations}
          onChange={handleChange}
          required
        />
        <TextareaField
          id="otherIssues"
          name="otherIssues"
          label="Other Issues Detected"
          value={processingServiceHistory.otherIssues}
          onChange={handleChange}
        />
        <InputField
          id="repairedOtherIssues"
          name="repairedOtherIssues"
          label="Repaired Other Issues"
          type="checkbox"
          checked={processingServiceHistory.repairedOtherIssues}
          onChange={handleChange}
        />
        <InputField
          id="repairDuration"
          name="repairDuration"
          label="Repair Duration (minutes)"
          type="number"
          value={processingServiceHistory.repairDuration}
          onChange={handleChange}
          required
          step="10"
          min="0"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProcessingServiceHistory;
