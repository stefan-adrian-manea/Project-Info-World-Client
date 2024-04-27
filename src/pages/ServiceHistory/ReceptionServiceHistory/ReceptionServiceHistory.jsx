import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { addReceptionServiceHistory, getAppointment } from "../../../services/appointments";

import TextareaField from "../../../components/formComponents/TextareaField";
import SelectField from "../../../components/formComponents/SelectField";
import InputField from "../../../components/formComponents/InputField";

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
          <SelectField
            id="serviceType"
            name="serviceType"
            label="Service Type"
            value={receptionServiceHistory.serviceType}
            onChange={handleChange}
            options={[
              { value: "", label: "Select service type" },
              { value: "revision", label: "Revision" },
              { value: "verification", label: "Verification" },
            ]}
          />
          <InputField
            id="isScratched"
            name="isScratched"
            label="Scratched"
            type="checkbox"
            checked={receptionServiceHistory.isScratched}
            onChange={handleChange}
          />
          {receptionServiceHistory.isScratched && (
            <InputField
              id="scratchedLocation"
              name="scratchedLocation"
              label="Scratched Location"
              type="text"
              value={receptionServiceHistory.scratchedLocation}
              onChange={handleChange}
            />
          )}
          <InputField
            id="isDamaged"
            name="isDamaged"
            label="Damaged"
            type="checkbox"
            checked={receptionServiceHistory.isDamaged}
            onChange={handleChange}
          />
          {receptionServiceHistory.isDamaged && (
            <InputField
              id="damageLocation"
              name="damageLocation"
              label="Damage Location"
              type="text"
              value={receptionServiceHistory.damageLocation}
              onChange={handleChange}
            />
          )}
          <TextareaField
            id="mentionedProblems"
            name="mentionedProblems"
            label="Mentioned Problems"
            value={receptionServiceHistory.mentionedProblems}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      
  );
}

export default ReceptionServiceHistory;
