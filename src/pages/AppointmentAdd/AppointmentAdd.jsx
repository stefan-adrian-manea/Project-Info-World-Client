import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useClient } from "../../hooks/useClient";
import { addAppointment } from "../../services/appointments";

import TextareaField from "../../components/formComponents/TextareaField";
import InputField from "../../components/formComponents/InputField";
import SelectField from "../../components/formComponents/SelectField";
import { validateAppointment } from "../../utils/validation";

const defaultFormData = {
  car: "",
  action: "",
  contact: "",
  interval: "",
};

function AppointmentAdd() {
  const { clientData, carsList, handleGetClient } = useClient();
  const [formData, setFormData] = useState(defaultFormData);

  const { id: clientID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handleGetClient(clientID);
  }, [clientID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName } = clientData;
    const appointmentData = {
      clientID: clientID,
      clientName: `${firstName} ${lastName}`,
      ...formData,
    }
    const validAppointment = validateAppointment(appointmentData)
    if(validAppointment.isValid === false){
      window.alert(validAppointment.message);
      return;
    }

    addAppointment(appointmentData);
    setFormData(defaultFormData);
    navigate("/appointments");
  };

  const getClientCarsOptions = (clientCars) => {
    return clientCars.map((car) => {
      const { make, model, year } = car;
      const carLabel = `${make} ${model} (${year})`;
      return { value: carLabel, label: carLabel };
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        Appointment for {clientData?.firstName} {clientData?.lastName}
      </h2>
      <SelectField
        id="contact"
        name="contact"
        label="Contact"
        value={formData.contact}
        onChange={handleChange}
        required
        options={[
          { value: "", label: "Select contact method" },
          { value: `Email: ${clientData?.email}`, label: "Email" },
          { value: `Tel: ${clientData?.phoneNumber}`, label: "Telephone" },
          { value: "Personal", label: "In person" },
        ]}
      />
      <SelectField
        id="car"
        name="car"
        label="Car"
        value={formData.car}
        onChange={handleChange}
        required
        options={[
          { value: "", label: "Select car" },
          ...(clientData ? getClientCarsOptions(carsList) : []),
        ]}
      />
      <TextareaField
        id="action"
        name="action"
        label="Action"
        value={formData.action}
        onChange={handleChange}
        required
      />
      <InputField
        id="interval"
        name="interval"
        label="Interval"
        type="time"
        value={formData.interval}
        onChange={handleChange}
        min="08:00"
        max="17:00"
        step="1800"
        required
      />
      <button type="submit">Finish Schedule</button>
    </form>
  );
}

export default AppointmentAdd;
