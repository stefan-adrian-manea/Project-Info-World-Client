import { Link } from "react-router-dom";
function ProcessingServiceCard({ processingServiceData }) {
  const currentPath = window.location.pathname;
  return (
    <>
      <h3>Processing</h3>
      {processingServiceData ? (
        <div>
          <div>Parts Changed: {processingServiceData?.partsChanged}</div>
          <div>Operations: {processingServiceData?.operations}</div>
          <div>Other Issues: {processingServiceData?.otherIssues}</div>
          <div>
            Repaired Other Issues: {processingServiceData?.repairedOtherIssues ? "Yes" : "No"}
          </div>
          <div>Repair Duration: {processingServiceData?.repairDuration}</div>
        </div>
      ) : (
        <Link to={`${currentPath}/processing`}>
          <span>Add processing car information</span>
        </Link>
      )}
    </>
  );
}

export default ProcessingServiceCard;
