import { Link } from "react-router-dom";
function ServiceHistory() {
  const currentPath = window.location.pathname;
  return (
    <div>
      <h2>Service History</h2>
      <div>
        <Link to={`${currentPath}/reception`}>
          <button>Primire masina</button>
        </Link>
        <Link to={`${currentPath}/processing`}>
          <button>Procesare masina</button>
        </Link>
      </div>
    </div>
  );
}

export default ServiceHistory;
