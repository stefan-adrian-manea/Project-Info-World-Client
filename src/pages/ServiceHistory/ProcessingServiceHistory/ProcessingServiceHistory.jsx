import { useParams, useNavigate } from "react-router-dom";

import { useAppointmentService } from "../../../context/AppointmentServiceContext/AppointmentServiceContext";

import TextareaField from "../../../components/formComponents/TextareaField";
import InputField from "../../../components/formComponents/InputField";
import { isValidRepairDuration } from "../../../utils/validation";

function ProcessingServiceHistory() {
  const { processingServiceHistory, handleProcessingFormSubmission, handleChangeProcessing } =
    useAppointmentService();

  const { id: appointmentID } = useParams();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    const validRepairDuration = isValidRepairDuration(processingServiceHistory.repairDuration);
    if (validRepairDuration.isValid === false) {
      window.alert(validRepairDuration.message);
      return;
    }
    handleProcessingFormSubmission(appointmentID).then(() => navigate(-1));
  };

  return (
    <div className="container mt-4">
      <h3>Processing History</h3>
      <form onSubmit={handleForm}>
        <div className="mb-3">
          <InputField
            id="partsChanged"
            name="partsChanged"
            label="Parts Changed"
            type="text"
            value={processingServiceHistory.partsChanged}
            onChange={handleChangeProcessing}
            required
          />
        </div>
        <div className="mb-3">
          <TextareaField
            id="operations"
            name="operations"
            label="Operations Performed"
            value={processingServiceHistory.operations}
            onChange={handleChangeProcessing}
            required
          />
        </div>
        <div className="mb-3">
          <TextareaField
            id="otherIssues"
            name="otherIssues"
            label="Other Issues Detected"
            value={processingServiceHistory.otherIssues}
            onChange={handleChangeProcessing}
          />
        </div>
        <div className="mb-3 form-check">
          <InputField
            id="repairedOtherIssues"
            name="repairedOtherIssues"
            label="Repaired Other Issues"
            type="checkbox"
            checked={processingServiceHistory.repairedOtherIssues}
            onChange={handleChangeProcessing}
          />
        </div>
        <div className="mb-3">
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
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ProcessingServiceHistory;
