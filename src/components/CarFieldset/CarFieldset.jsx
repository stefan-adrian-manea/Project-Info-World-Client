import { horsepowerToKilowatts } from "../../utils/validation";
import InputField from "../formComponents/InputField";
import SelectField from "../formComponents/SelectField";

function CarFieldset({ index, carData, handleRemoveCar, handleCarChange, handlePowerChange }) {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="text-center card-title">Car {index + 1} information</h3>
        <InputField
          id="make"
          name="make"
          label="Make"
          type="text"
          value={carData.make}
          onChange={handleCarChange}
          required
        />
        <InputField
          id="model"
          name="model"
          label="Model"
          type="text"
          value={carData.model}
          onChange={handleCarChange}
          required
        />
        <InputField
          id="year"
          name="year"
          label="Year"
          type="number"
          value={carData.year}
          onChange={handleCarChange}
          required
        />
        <SelectField
          id="engineType"
          name="engineType"
          label="Engine Type"
          value={carData.engineType}
          onChange={handleCarChange}
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
          label="Engine Capacity"
          type="number"
          value={carData.engineCapacity}
          onChange={handleCarChange}
          required
        />

        <InputField
          id="horsepower"
          name="horsepower"
          label="Horsepower"
          type="number"
          value={carData.horsepower}
          onChange={handlePowerChange}
          required
        />

        <InputField
          id="kilowatts"
          name="kilowatts"
          label="kW Power"
          type="number"
          value={horsepowerToKilowatts(carData.horsepower)}
          required
          readOnly
        />

        <InputField
          id="registrationNumber"
          name="registrationNumber"
          label="Registration Number"
          type="text"
          value={carData.registrationNumber}
          onChange={handleCarChange}
          required
        />

        <InputField
          id="chassisNumber"
          name="chassisNumber"
          label="Chassis Number"
          type="text"
          value={carData.chassisNumber}
          onChange={handleCarChange}
          required
        />

        <button type="button" className="btn btn-danger btn-block" onClick={handleRemoveCar}>
          Delete Car
        </button>
      </div>
    </div>
  );
}

export default CarFieldset;
