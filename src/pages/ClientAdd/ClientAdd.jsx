import { useClient } from "../../hooks/useClient.hook";
import CarFieldset from "../../components/CarFieldset/CarFieldset";
import ClientFieldset from "../../components/ClientFieldset/ClientFieldset";
import "./ClientAdd.css";
import "../../common-style/ClientForm.css"
function ClientAdd() {
  const {
    client,
    carsList,
    handleClientChange,
    handleCarChange,
    handleAddCar,
    handleRemoveCar,
    handleSubmitAddClient,
    handlePowerChange,
  } = useClient();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmitAddClient();
  };

  return (
    <div className="from-client-container">
      <h2 className="title text-center mb-3">Add new client</h2>
      <form onSubmit={handleSubmit} className="form-client">
        <ClientFieldset
          formData={client}
          handleClientChange={handleClientChange}
          handleAddCar={handleAddCar}
        />
        {carsList.map((carData, index) => (
          <CarFieldset
            key={index}
            index={index}
            carData={carData}
            handleRemoveCar={() => handleRemoveCar(index)}
            handleCarChange={(e) => handleCarChange(e, index)}
            handlePowerChange={(e) => handlePowerChange(e, index)}
          />
        ))}
        <button type="submit" className="btn btn-primary btn-block">
          Add Client
        </button>
      </form>
    </div>
  );
}

export default ClientAdd;
