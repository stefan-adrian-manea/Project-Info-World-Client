import { useParams, useNavigate } from "react-router-dom";

import { useAppointmentService } from "../../../context/AppointmentServiceContext/AppointmentServiceContext";

import TextareaField from "../../../components/formComponents/TextareaField";
import SelectField from "../../../components/formComponents/SelectField";
import InputField from "../../../components/formComponents/InputField";

function ReceptionServiceHistory() {
  const { receptionServiceHistory, handleReceptionFormSubmission, handleChangeReception } =
    useAppointmentService();

  const { id: appointmentID } = useParams();
  const navigate = useNavigate();

 const handleSubmit = (e) => {
    e.preventDefault();
    handleReceptionFormSubmission(appointmentID);
    navigate(-1);
  };

  return (
    <div>
      <h3>Reception History</h3>
      <form onSubmit={handleSubmit}>
        <SelectField
          id="serviceType"
          name="serviceType"
          label="Service Type"
          value={receptionServiceHistory.serviceType}
          onChange={handleChangeReception}
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
          onChange={handleChangeReception}
        />
        {receptionServiceHistory.isScratched && (
          <InputField
            id="scratchedLocation"
            name="scratchedLocation"
            label="Scratched Location"
            type="text"
            value={receptionServiceHistory.scratchedLocation}
            onChange={handleChangeReception}
          />
        )}
        <InputField
          id="isDamaged"
          name="isDamaged"
          label="Damaged"
          type="checkbox"
          checked={receptionServiceHistory.isDamaged}
          onChange={handleChangeReception}
        />
        {receptionServiceHistory.isDamaged && (
          <InputField
            id="damageLocation"
            name="damageLocation"
            label="Damage Location"
            type="text"
            value={receptionServiceHistory.damageLocation}
            onChange={handleChangeReception}
          />
        )}
        <TextareaField
          id="mentionedProblems"
          name="mentionedProblems"
          label="Mentioned Problems"
          value={receptionServiceHistory.mentionedProblems}
          onChange={handleChangeReception}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReceptionServiceHistory;
