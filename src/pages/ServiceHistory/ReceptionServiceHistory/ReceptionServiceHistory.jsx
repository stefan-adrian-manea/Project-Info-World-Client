import { useParams, useNavigate } from "react-router-dom";

import { useAppointmentService } from "../../../context/AppointmentServiceContext/AppointmentServiceContext";

import TextareaField from "../../../components/formComponents/TextareaField";
import SelectField from "../../../components/formComponents/SelectField";
import InputField from "../../../components/formComponents/InputField";

function ReceptionServiceHistory() {
  const {
    receptionServiceHistory,
    handleReceptionFormSubmission,
    handleChangeReception,
  } = useAppointmentService();

  const { id: appointmentID } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReceptionFormSubmission(appointmentID, receptionServiceHistory).then(() => navigate(-1));
  };

  return (
    <div className="container mt-4">
      <h3>Reception History</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
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
            required
          />
        </div>
        <div className="mb-3">
          <InputField
            id="isScratched"
            name="isScratched"
            label="Scratched"
            type="checkbox"
            checked={receptionServiceHistory.isScratched}
            onChange={handleChangeReception}
          />
        </div>
        {receptionServiceHistory.isScratched && (
          <div className="mb-3">
            <InputField
              id="scratchedLocation"
              name="scratchedLocation"
              label="Scratched Location"
              type="text"
              value={receptionServiceHistory.scratchedLocation}
              onChange={handleChangeReception}
              required
            />
          </div>
        )}
        <div className="mb-3">
          <InputField
            id="isDamaged"
            name="isDamaged"
            label="Damaged"
            type="checkbox"
            checked={receptionServiceHistory.isDamaged}
            onChange={handleChangeReception}
          />
        </div>
        {receptionServiceHistory.isDamaged && (
          <div className="mb-3">
            <InputField
              id="damageLocation"
              name="damageLocation"
              label="Damage Location"
              type="text"
              value={receptionServiceHistory.damageLocation}
              onChange={handleChangeReception}
              required
            />
          </div>
        )}
        <div className="mb-3">
          <TextareaField
            id="mentionedProblems"
            name="mentionedProblems"
            label="Mentioned Problems"
            value={receptionServiceHistory.mentionedProblems}
            onChange={handleChangeReception}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ReceptionServiceHistory;
