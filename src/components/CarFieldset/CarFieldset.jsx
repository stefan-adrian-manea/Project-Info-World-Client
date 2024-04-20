function CarFieldset({ carData, onChange }) {
    
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...carData, [name]: value });
  };

  return (
    <div className="fieldset">
      <h2>Informatii despre masina</h2>
      <div>
        <label htmlFor="make">Marca:</label>
        <input
          type="text"
          id="make"
          name="make"
          value={carData.make}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="model">Model:</label>
        <input
          type="text"
          id="model"
          name="model"
          value={carData.model}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="year">An fabricatie:</label>
        <input
          type="number"
          id="year"
          name="year"
          value={carData.year}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="engineType">Tip motorizare:</label>
        <select
          id="engineType"
          name="engineType"
          value={carData.engineType}
          onChange={handleChange}
          required
        >
          <option value="Diesel">Diesel</option>
          <option value="Benzina">Benzina</option>
          <option value="Hibrid">Hibrid</option>
          <option value="Electric">Electric</option>
        </select>
      </div>
      <div>
        <label htmlFor="engineCapacity">Capacitate motor:</label>
        <input
          type="number"
          id="engineCapacity"
          name="engineCapacity"
          value={carData.engineCapacity}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="horsepower">Cai putere:</label>
        <input
          type="number"
          id="horsepower"
          name="horsepower"
          value={carData.horsepower}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="kilowatts">kW putere:</label>
        <input
          type="number"
          id="kilowatts"
          name="kilowatts"
          value={carData.kilowatts}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="registrationNumber">Numar inmatriculare:</label>
        <input
          type="text"
          id="registrationNumber"
          name="registrationNumber"
          value={carData.registrationNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="chassisNumber">Serie sasiu:</label>
        <input
          type="text"
          id="chassisNumber"
          name="chassisNumber"
          value={carData.chassisNumber}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
}

export default CarFieldset;
