import { useState } from "react";
import { addClient, checkDuplicateEmail, updateClient, getClient } from "../services/clients";
import { horsepowerToKilowatts, validateCarForm, validateClientForm } from "../utils/validation";

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

export const useClient = () => {
  const [client, setClient] = useState(defaultClientData);
  const [carsList, setCarsList] = useState([defaultCarData]);

  const handleClientChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };

  const handleCarChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCarsData = carsList.map((car, i) =>
      i === index ? { ...car, [name]: value } : car
    );
    setCarsList(updatedCarsData);
  };

  const handlePowerChange = (e, index) => {
    const { name, value } = e.target;
    const updatedCarsData = carsList.map((car, i) =>
      i === index ? { ...car, [name]: value, kilowatts: horsepowerToKilowatts(value) } : car
    );
    setCarsList(updatedCarsData);
  };

  const handleAddCar = () => {
    const lastCar = carsList[carsList.length - 1];
    const allValuesNotEmpty = Object.values(lastCar).every((value) => value !== "");
    if (allValuesNotEmpty) {
      setCarsList([...carsList, defaultCarData]);
    } else {
      window.alert("Please fill out all fields for the current car before adding a new one.");
    }
  };

  const handleRemoveCar = (index) => {
    const confirmResponse = window.confirm("Are you sure you want to delete this car?");
    if (confirmResponse === false) return;
    if (carsList.length > 1) {
      const updatedCarsList = carsList.filter((car, i) => i !== index);
      setCarsList(updatedCarsList);
    } else {
      window.alert("Customer must have at least one car");
    }
  };

  const handleGetClient = async (clientID) => {
    try {
      const { firstName, lastName, email, phoneNumber, cars, id } = await getClient(clientID);
      setClient({ firstName, lastName, email, phoneNumber, id });
      setCarsList(cars);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitAddClient = async () => {
    try {
      // const isDuplicate = await checkDuplicateEmail(client.email);
      // if (isDuplicate) {
      //   window.alert("Email address is already registered.");
      //   return;
      // }
      const validateClient = validateClientForm(client);
      if (validateClient.isValid === false) {
        window.alert(validateClient.message);
        return;
      }

      for (let car of carsList) {
        let validateCar = validateCarForm(car);
        if (validateCar.isValid === false) {
          window.alert(validateCar.message);
          return;
        }
      }

      const formData = { ...client, cars: carsList };
      await addClient(formData);
      setClient(defaultClientData);
      setCarsList([defaultCarData]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitUpdateClient = async (clientID) => {
    const formData = { ...client, cars: carsList };
    try {
      await updateClient(clientID, formData);
      setClient(defaultClientData);
      setCarsList([defaultCarData]);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    defaultClientData,
    defaultCarData,
    client,
    setClient,
    carsList,
    setCarsList,
    handleClientChange,
    handleCarChange,
    handleAddCar,
    handleRemoveCar,
    handleGetClient,
    handleSubmitAddClient,
    handleSubmitUpdateClient,
    handlePowerChange,
  };
};
