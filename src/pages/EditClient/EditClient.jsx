import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getClient, updateClient } from "../../services/clients";
import ClientFieldset from "../../components/ClientFieldset/ClientFieldset";
import CarFieldset from "../../components/CarFieldset/CarFieldset";

function EditClient() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cars: [],
  });
  const [editCarIndex, setEditCarIndex] = useState(null);

  useEffect(() => {
    async function fetchClient() {
      try {
        const clientData = await getClient(id);
        setFormData(clientData);
      } catch (error) {
        console.error("Eroare la obtinerea datelor clientului:", error);
      }
    }
    fetchClient();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCarEdit = (index) => {
    setEditCarIndex(index);
  };
  const updateCarData = (newCarData, index) => {
    setFormData({
      ...formData,
      cars: formData.cars.map((car, i) => (i === index ? newCarData : car)),
    });
  };
  const handleCarSave = () => {
    setEditCarIndex(null);
  };

  const handleCarDelete = (index) => {
    const updatedCars = [...formData.cars];
    if (updatedCars.length > 1) updatedCars.splice(index, 1);
    setFormData({ ...formData, cars: updatedCars });
  };

  const handleNavigate = () => {
    navigate("/clients-list");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateClient(id, formData);
      handleNavigate();
    } catch (error) {
      console.error("Eroare la actualizarea clientului:", error);
    }
  };

  return (
    <div>
      <h2>Editare client</h2>
      <form onSubmit={handleSubmit}>
        <ClientFieldset formData={formData} onChange={handleChange} />
        <ul>
          {formData.cars.map((car, index) => (
            <li key={index}>
              {car.make} {car.model} ({car.year})
              {editCarIndex === index ? (
                <div>
                  <CarFieldset
                    carData={car}
                    onChange={(newCarData) => updateCarData(newCarData, index)}
                  />
                  <button type="button" onClick={handleCarSave}>
                    Save
                  </button>
                  <button type="button" onClick={() => handleCarDelete(index)}>
                    Sterge
                  </button>
                </div>
              ) : (
                <button type="button" onClick={() => handleCarEdit(index)}>
                  Edit
                </button>
              )}
            </li>
          ))}
        </ul>

        <button type="submit">Actualizeaza</button>
        <button type="button" onClick={handleNavigate}>
          Anuleaza
        </button>
      </form>
    </div>
  );
}

export default EditClient;
