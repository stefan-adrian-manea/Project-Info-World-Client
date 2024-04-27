import { useParams, useNavigate } from "react-router-dom";

import { useAppointmentService } from "../../../context/AppointmentServiceContext/AppointmentServiceContext";

import TextareaField from "../../../components/formComponents/TextareaField";
import InputField from "../../../components/formComponents/InputField";

function ProcessingServiceHistory() {
  const { processingServiceHistory, handleProcessingFormSubmission, handleChangeProcessing } =
    useAppointmentService();

    const { id: appointmentID } = useParams();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    handleProcessingFormSubmission(appointmentID);
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
          onChange={handleChangeProcessing}
          required
        />
        <TextareaField
          id="operations"
          name="operations"
          label="Operations Performed"
          value={processingServiceHistory.operations}
          onChange={handleChangeProcessing}
          required
        />
        <TextareaField
          id="otherIssues"
          name="otherIssues"
          label="Other Issues Detected"
          value={processingServiceHistory.otherIssues}
          onChange={handleChangeProcessing}
        />
        <InputField
          id="repairedOtherIssues"
          name="repairedOtherIssues"
          label="Repaired Other Issues"
          type="checkbox"
          checked={processingServiceHistory.repairedOtherIssues}
          onChange={handleChangeProcessing}
        />
        <InputField
          id="repairDuration"
          name="repairDuration"
          label="Repair Duration (minutes)"
          type="number"
          value={processingServiceHistory.repairDuration}
          onChange={handleChangeProcessing}
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
