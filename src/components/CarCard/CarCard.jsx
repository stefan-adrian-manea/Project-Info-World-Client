function CarCard({ car }) {
  const {
    make,
    model,
    year,
    engineType,
    engineCapacity,
    horsepower,
    kilowatts,
    registrationNumber,
    chassisNumber,
  } = car;

  return (
    <div className="car-card">
      <h3>
        {make} {model} {year}
      </h3>
      <div>
        <p>Engine Type: {engineType}</p>
        <p>Engine Capacity: {engineCapacity}</p>
        <p>Horsepower: {horsepower}</p>
        <p>Kilowatts: {kilowatts}</p>
        <p>Registration Number: {registrationNumber}</p>
        <p>Chassis Number: {chassisNumber}</p>
      </div>
    </div>
  );
}

export default CarCard;
