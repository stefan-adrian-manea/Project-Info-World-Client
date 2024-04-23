import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { addReceptionServiceHistory, getAppointment } from "../../../services/appointments";

const defaultFormState = {
  serviceType: "",
  isScratched: false,
  isDamaged: false,
  scratchedLocation: "",
  damageLocation: "",
  mentionedProblems: "",
};

function ReceptionServiceHistory() {
  const { id: appointmentID } = useParams();
  const navigate = useNavigate();
  
  const [receptionServiceHistory, setReceptionServiceHistory] = useState(defaultFormState);
  const [appointmentData, setAppointmentData] = useState(null);

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
    setReceptionServiceHistory({ ...receptionServiceHistory, [name]: newValue });
  };

  const handleForm = (e) => {
    e.preventDefault();
    addReceptionServiceHistory(appointmentID, { ...appointmentData, receptionServiceHistory });
    setReceptionServiceHistory(defaultFormState);
    navigate(-1);
  };

  return (
    <div>
      <h3>Reception History</h3>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="serviceType">Service Type:</label>
          <select
            id="serviceType"
            name="serviceType"
            value={receptionServiceHistory.serviceType}
            onChange={handleChange}
          >
            <option value="">Select service type</option>
            <option value="revision">Revision</option>
            <option value="verification">Verification</option>
          </select>
        </div>
        <div>
          <label htmlFor="isScratched">Scratched:</label>
          <input
            type="checkbox"
            id="isScratched"
            name="isScratched"
            checked={receptionServiceHistory.isScratched}
            onChange={handleChange}
          />
        </div>
        {receptionServiceHistory.isScratched && (
          <div>
            <label htmlFor="scratchedLocation">Scratched Location:</label>
            <input
              type="text"
              id="scratchedLocation"
              name="scratchedLocation"
              value={receptionServiceHistory.scratchedLocation}
              onChange={handleChange}
            />
          </div>
        )}
        <div>
          <label htmlFor="isDamaged">Damaged:</label>
          <input
            type="checkbox"
            id="isDamaged"
            name="isDamaged"
            checked={receptionServiceHistory.isDamaged}
            onChange={handleChange}
          />
        </div>
        {receptionServiceHistory.isDamaged && (
          <div>
            <label htmlFor="damageLocation">Damage Location:</label>
            <input
              type="text"
              id="damageLocation"
              name="damageLocation"
              value={receptionServiceHistory.damageLocation}
              onChange={handleChange}
            />
          </div>
        )}
        <div>
          <label htmlFor="mentionedProblems">Mentioned Problems:</label>
          <textarea
            id="mentionedProblems"
            name="mentionedProblems"
            value={receptionServiceHistory.mentionedProblems}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReceptionServiceHistory;
