import { useState } from "react";
import { addClient, checkDuplicateEmail } from "../../services/clients";
import CarFieldset from "../../components/CarFieldset/CarFieldset";
import ClientFieldset from "../../components/ClientFieldset/ClientFieldset";

const defaultClientData = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

const defaultCarData = {
  make: "",
  model: "",
  year: "",
  engineType: "",
  engineCapacity: "",
  horsepower: "",
  kilowatts: "",
  registrationNumber: "",
  chassisNumber: "",
};

function Clients() {
  const [clientData, setClientData] = useState(defaultClientData);
  const [carsData, setCarsData] = useState([defaultCarData]);

  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setClientData({ ...clientData, [name]: value });
  };

  const handleCarChange = (newCarData, index) => {
    const updatedCarsData = [...carsData];
    updatedCarsData[index] = newCarData;
    setCarsData(updatedCarsData);
  };

  const addNewCar = () => {
    setCarsData([...carsData, defaultCarData]);
  };

  const removeCar = (index) => {
    if (carsData.length > 1) {
      const updatedCarsData = carsData.filter((car, i) => i !== index);
      setCarsData(updatedCarsData);
    }
  };

  const handleCheckDuplicateEmail = async (email) => {
    try {
      const isDuplicate = await checkDuplicateEmail(email);
      return isDuplicate;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isDuplicate = await handleCheckDuplicateEmail(clientData.email);
    if (isDuplicate) {
      console.log("Adresa de email este deja inregistrata.");
      return;
    }
    try {
      const formData = { ...clientData, cars: carsData };
      await addClient(formData);
      setClientData(defaultClientData);
      setCarsData([defaultCarData]);
    } catch (error) {}
  };

  return (
    <div>
      <h1>Formular Client</h1>
      <form onSubmit={handleSubmit}>
        
        <ClientFieldset formData={clientData} onChange={handleClientChange} />

        {carsData.map((carData, index) => (
          <div key={index}>
            <CarFieldset
              carData={carData}
              onChange={(newCarData) => handleCarChange(newCarData, index)}
            />
            {index > 0 && (
              <button type="button" onClick={() => removeCar(index)}>
                Anuleaza
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={addNewCar}>
          Adauga masina noua
        </button>

        <button type="submit">Trimite</button>
      </form>
    </div>
  );
}

export default Clients;
