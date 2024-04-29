function CarRow({ car }) {
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
    <tr>
      <td>{make}</td>
      <td>{model}</td>
      <td>{year}</td>
      <td>{engineType}</td>
      <td>{engineCapacity}</td>
      <td>{horsepower}</td>
      <td>{kilowatts}</td>
      <td>{registrationNumber}</td>
      <td>{chassisNumber}</td>
    </tr>
  );
}

export default CarRow;
