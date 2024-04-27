import InputField from "../formComponents/InputField";
import SelectField from "../formComponents/SelectField";

function CarFieldset({ index, carData, handleRemoveCar, onChange }) {
  return (
    <div className="car-fieldset">
      <h2>Car {index + 1} information</h2>
      <InputField
        id="make"
        name="make"
        label="Marca"
        type="text"
        value={carData.make}
        onChange={onChange}
        required
      />
      <InputField
        id="model"
        name="model"
        label="Model"
        type="text"
        value={carData.model}
        onChange={onChange}
        required
      />
      <InputField
        id="year"
        name="year"
        label="An fabricatie"
        type="number"
        value={carData.year}
        onChange={onChange}
        required
      />
      <SelectField
        id="engineType"
        name="engineType"
        label="Tip motorizare"
        value={carData.engineType}
        onChange={onChange}
        required
        options={[
          { value: "", label: "Select engine type" },
          { value: "diesel", label: "Diesel" },
          { value: "gasoline", label: "Gasoline" },
          { value: "hybrid", label: "Hybrid" },
          { value: "electric", label: "Electric" },
        ]}
      />
      <InputField
        id="engineCapacity"
        name="engineCapacity"
        label="Capacitate motor"
        type="number"
        value={carData.engineCapacity}
        onChange={onChange}
        required
      />
      <InputField
        id="horsepower"
        name="horsepower"
        label="Cai putere"
        type="number"
        value={carData.horsepower}
        onChange={onChange}
        required
      />
      <InputField
        id="kilowatts"
        name="kilowatts"
        label="kW putere"
        type="number"
        value={carData.kilowatts}
        onChange={onChange}
        required
      />
      <InputField
        id="registrationNumber"
        name="registrationNumber"
        label="Numar inmatriculare"
        type="text"
        value={carData.registrationNumber}
        onChange={onChange}
        required
      />
      <InputField
        id="chassisNumber"
        name="chassisNumber"
        label="Serie sasiu"
        type="text"
        value={carData.chassisNumber}
        onChange={onChange}
        required
      />
      <button type="button" onClick={handleRemoveCar}>
        Delete car
      </button>
    </div>
  );
}

export default CarFieldset;
