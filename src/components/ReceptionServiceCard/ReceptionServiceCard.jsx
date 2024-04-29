import { Link } from "react-router-dom";
function ReceptionServiceCard({ receptionServiceData }) {
  const currentPath = window.location.pathname;
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="text-center">Reception</h3>
      </div>

      {receptionServiceData ? (
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Service Type: {receptionServiceData?.serviceType}</li>
          <li className="list-group-item">
            Is Scratched: {receptionServiceData?.isScratched ? "Yes" : "No"}
          </li>
          <li className="list-group-item">
            Is Damaged: {receptionServiceData?.isDamaged ? "Yes" : "No"}
          </li>
          {receptionServiceData?.isScratched && (
            <li className="list-group-item">
              Scratched Location: {receptionServiceData?.scratchedLocation}
            </li>
          )}
          {receptionServiceData?.isDamaged && (
            <li className="list-group-item">
              Damage Location: {receptionServiceData?.damageLocation}
            </li>
          )}
          <li className="list-group-item">
            Mentioned Problems: {receptionServiceData?.mentionedProblems}
          </li>
        </ul>
      ) : (
        <Link to={`${currentPath}/reception`} className="btn btn-primary mt-3">
          Add reception information
        </Link>
      )}
    </div>
  );
}

export default ReceptionServiceCard;
