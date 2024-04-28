import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useClient } from "../../hooks/useClient";
import { deleteClient } from "../../services/clients";

import ClientFieldset from "../../components/ClientFieldset/ClientFieldset";
import CarFieldset from "../../components/CarFieldset/CarFieldset";

import "./ClientEdit.css";
import "../../common-style/ClientForm.css"
function ClientEdit() {
  const {
    handleGetClient,
    clientData,
    carsList,
    handleClientChange,
    handleCarChange,
    handleAddCar,
    handleRemoveCar,
    handleSubmitUpdateClient,
    handlePowerChange,
  } = useClient();

  const { id: clientID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handleGetClient(clientID);
  }, [clientID]);

  const handleDeleteClient = async () => {
    const confirmResponse = window.confirm("Are you sure you want to delete this client?");
    if (confirmResponse === false) return;
    try {
      await deleteClient(clientID);
      navigate("/clients-list");
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitUpdateClient(clientID);
    navigate(`/client/${clientID}`);
  };

  return (
    <div className="from-client-container">
      <h2 className="title text-center mb-3">
        Edit Client <button className="btn btn-danger" onClick={handleDeleteClient}>Delete</button>
      </h2>
      <form onSubmit={handleSubmit} className="form-client">
        <ClientFieldset
          formData={clientData}
          handleClientChange={handleClientChange}
          handleAddCar={handleAddCar}
        />
          {carsList.map((car, index) => (
            <CarFieldset
              key={index}
              index={index}
              carData={car}
              handleRemoveCar={() => handleRemoveCar(index)}
              handleCarChange={(e) => handleCarChange(e, index)}
              handlePowerChange={(e) => handlePowerChange(e, index)}
            />
          ))}
        <button type="submit" className="btn btn-primary btn-block">Update Client</button>
        <button type="button" className="btn btn-secondary btn-block" onClick={() => navigate(`/client/${clientID}`)}>
          Cancel edit
        </button>
      </form>
    </div>
  );
}

export default ClientEdit;
