import { useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";

import { useClient } from "../../hooks/useClient";
import { deleteClient } from "../../services/clients";

import ClientFieldset from "../../components/ClientFieldset/ClientFieldset";
import CarFieldset from "../../components/CarFieldset/CarFieldset";

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
    <div>
      <h2>
        Edit Client <button onClick={handleDeleteClient}>Delete</button>
      </h2>
      <form onSubmit={handleSubmit}>
        <ClientFieldset
          formData={clientData}
          handleClientChange={handleClientChange}
          handleAddCar={handleAddCar}
        />
        <div className="container-car-fieldset">
          {carsList.map((car, index) => (
            <CarFieldset
              key={index}
              index={index}
              carData={car}
              handleRemoveCar={() => handleRemoveCar(index)}
              onChange={(e) => handleCarChange(e, index)}
            />
          ))}
        </div>
        <button type="submit">Update Client</button>
        <button type="button" onClick={() => navigate(`/client/${clientID}`)}>
          Cancel edit
        </button>
      </form>
    </div>
  );
}

export default ClientEdit;
