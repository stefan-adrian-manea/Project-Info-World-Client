import { useClient } from "../../hooks/useClient";

import CarFieldset from "../../components/CarFieldset/CarFieldset";
import ClientFieldset from "../../components/ClientFieldset/ClientFieldset";

function ClientAdd() {
  const {
    clientData,
    carsList,
    handleClientChange,
    handleCarChange,
    handleAddCar,
    handleRemoveCar,
    handleSubmitAddClient,
  } = useClient();

 
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitAddClient();
  };

  return (
    <div>
      <h1>Add new client</h1>
      <form onSubmit={handleSubmit}>
        <ClientFieldset
          formData={clientData}
          handleClientChange={handleClientChange}
          handleAddCar={handleAddCar}
        />
        <div className="container-car-fieldset">
          {carsList.map((carData, index) => (
            <CarFieldset
              key={index}
              index={index}
              carData={carData}
              handleRemoveCar={() => handleRemoveCar(index)}
              onChange={(e) => handleCarChange(e, index)}
            />
          ))}
        </div>
        <button type="submit">Add Client</button>
      </form>
    </div>
  );
}

export default ClientAdd;
