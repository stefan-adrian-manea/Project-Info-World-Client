import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getClient } from "../../services/clients";
import { addAppointment } from "../../services/appointments";

const defaultFormData = {
  car: "",
  action: "",
  contact: "",
  interval: "",
  serviceHistory: {},
};

function AppointmentClient() {
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const [formData, setFormData] = useState(defaultFormData);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchClientData() {
      try {
        const clientData = await getClient(id);
        setClient(clientData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchClientData();
  }, [id]);

  const getClientCarsOptions = (clientCars) => {
    return clientCars.map((car, index) => {
      const { make, model, year } = car;
      const carLabel = `${make} ${model} (${year})`;
      return (
        <option key={index} value={carLabel}>
          {carLabel}
        </option>
      );
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment({ clientID: id, clientName: `${client?.firstName} ${client?.lastName}`, ...formData });
    setFormData(defaultFormData);
    navigate("/appointments")
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        Programare Client {client?.firstName} {client?.lastName}
      </h2>
      <div>
        <label htmlFor="contact">Contact:</label>
        <select
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Selecteaza modul de contact
          </option>
          <option value={`Email: ${client?.email}`}>Email</option>
          <option value={`Tel: ${client?.phoneNumber}`}>Telefon</option>
          <option value="Personal">In persoana</option>
        </select>
      </div>
      <div>
        <label htmlFor="car">Masina:</label>
        <select id="car" name="car" value={formData.car} onChange={handleChange} required>
          <option value="" disabled>
            Alege Masina
          </option>
          {client && getClientCarsOptions(client.cars)}
        </select>
      </div>
      <div>
        <label htmlFor="action">Actiune:</label>
        <textarea
          id="action"
          name="action"
          value={formData.action}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="interval">Interval:</label>
        <input
          type="time"
          id="interval"
          name="interval"
          value={formData.interval}
          onChange={handleChange}
          min="08:00"
          max="17:00"
          step="1800"
          required
        />
      </div>
      <button type="submit">Programeaza</button>
    </form>
  );
}

export default AppointmentClient;
