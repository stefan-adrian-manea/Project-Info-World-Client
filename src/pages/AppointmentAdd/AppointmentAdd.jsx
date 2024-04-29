import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useClient } from "../../hooks/useClient.hook";
import { addAppointment } from "../../services/appointments";

import TextareaField from "../../components/formComponents/TextareaField";
import InputField from "../../components/formComponents/InputField";
import SelectField from "../../components/formComponents/SelectField";
import { validateAppointment } from "../../utils/validation";

const defaultAppointment = {
  car: "",
  action: "",
  contact: "",
  interval: "",
};

function AppointmentAdd() {
  const { client, carsList, handleGetClient } = useClient();
  const [appointment, setAppointment] = useState(defaultAppointment);

  const { id: clientID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    handleGetClient(clientID);
  }, [clientID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName } = client;
    const appointmentData = {
      clientID: clientID,
      clientName: `${firstName} ${lastName}`,
      ...appointment,
    };
    const validAppointment = validateAppointment(appointmentData);
    if (validAppointment.isValid === false) {
      window.alert(validAppointment.message);
      return;
    }

    addAppointment(appointmentData).then(() => {
      setAppointment(defaultAppointment);
      navigate("/appointments");
    });
  };

  const getClientCarsOptions = (clientCars) => {
    return clientCars.map((car) => {
      const { make, model, year } = car;
      const carLabel = `${make} ${model} (${year})`;
      return { value: carLabel, label: carLabel };
    });
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h2>
        Appointment for {client?.firstName} {client?.lastName}
      </h2>
      <div className="row">
        <div className="col-md-6">
          <SelectField
            id="contact"
            name="contact"
            label="Contact"
            value={appointment.contact}
            onChange={handleChange}
            required
            options={[
              { value: "", label: "Select contact method" },
              { value: `Email: ${client?.email}`, label: "Email" },
              { value: `Tel: ${client?.phoneNumber}`, label: "Telephone" },
            ]}
          />
        </div>
        <div className="col-md-6">
          <SelectField
            id="car"
            name="car"
            label="Car"
            value={appointment.car}
            onChange={handleChange}
            required
            options={[
              { value: "", label: "Select car" },
              ...(client ? getClientCarsOptions(carsList) : []),
            ]}
          />
        </div>
      </div>
      <TextareaField
        id="action"
        name="action"
        label="Action"
        value={appointment.action}
        onChange={handleChange}
        required
      />
      <div className="row">
        <div className="col-md-6">
          <InputField
            id="interval"
            name="interval"
            label="Interval"
            type="time"
            value={appointment.interval}
            onChange={handleChange}
            min="08:00"
            max="17:00"
            step="1800"
            required
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Finish Schedule
      </button>
    </form>
  );
}

export default AppointmentAdd;
