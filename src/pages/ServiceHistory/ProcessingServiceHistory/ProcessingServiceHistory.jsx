import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { getAppointment, addProcessingServiceHistory } from "../../../services/appointments";

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
        <div>
          <label htmlFor="partsChanged">Parts Changed:</label>
          <input
            type="text"
            id="partsChanged"
            name="partsChanged"
            value={processingServiceHistory.partsChanged}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="operations">Operations Performed:</label>
          <textarea
            id="operations"
            name="operations"
            value={processingServiceHistory.operations}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="otherIssues">Other Issues Detected:</label>
          <textarea
            id="otherIssues"
            name="otherIssues"
            value={processingServiceHistory.otherIssues}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="repairedOtherIssues">Repaired Other Issues:</label>
          <input
            type="checkbox"
            id="repairedOtherIssues"
            name="repairedOtherIssues"
            checked={processingServiceHistory.repairedOtherIssues}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="repairDuration">Repair Duration (minutes):</label>
          <input
            type="number"
            id="repairDuration"
            name="repairDuration"
            value={processingServiceHistory.repairDuration}
            onChange={handleChange}
            required
            step="10"
            min="0"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProcessingServiceHistory;
