import CarRow from "../CarRow/CarRow";
function CarsTable({ carsList }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Producer</th>
            <th>Model</th>
            <th>Year</th>
            <th>Engine Type</th>
            <th>Engine Capacity</th>
            <th>Horsepower</th>
            <th>Kilowatts</th>
            <th>Registration Number</th>
            <th>Chassis Number</th>
          </tr>
        </thead>
        <tbody>
          {carsList.map((car, index) => (
            <CarRow key={index} car={car} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarsTable;
