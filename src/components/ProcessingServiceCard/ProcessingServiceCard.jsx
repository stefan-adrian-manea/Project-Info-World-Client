import { Link } from "react-router-dom";
function ProcessingServiceCard({ receptionServiceData, processingServiceData }) {
  const currentPath = window.location.pathname;
  return (
    receptionServiceData && (
      <div className="card">
        <div className="card-header">
          <h3 className="text-center">Processing</h3>
        </div>
        {processingServiceData ? (
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Parts Changed: {processingServiceData?.partsChanged}
            </li>
            <li className="list-group-item">Operations: {processingServiceData?.operations}</li>
            <li className="list-group-item">Other Issues: {processingServiceData?.otherIssues}</li>
            <li className="list-group-item">
              Repaired Other Issues: {processingServiceData?.repairedOtherIssues ? "Yes" : "No"}
            </li>
            <li className="list-group-item">
              Repair Duration: {processingServiceData?.repairDuration}
            </li>
          </ul>
        ) : (
          <Link to={`${currentPath}/processing`} className="btn btn-primary mt-3">
            Add processing car information
          </Link>
        )}
      </div>
    )
  );
}

export default ProcessingServiceCard;
