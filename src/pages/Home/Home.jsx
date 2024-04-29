import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className="title">Internship 2024 Info World</h1>
      <div className="buttons-container">
        <Link to="/clients-add" className="button double-width">
          <div className="button double-width">Add new client</div>
        </Link>
        <Link className="button" to="/clients-list">
          <div>Clients List</div>
        </Link>
        <Link className="button" to="/appointments">
          <div>Appointments List</div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
