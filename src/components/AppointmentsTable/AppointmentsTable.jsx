import AppointmentRow from "../AppointmentRow/AppointmentRow";
function AppointmentsTable({appointmentsList, linkToAppointment}) {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="thead-dark">
        <tr>
          <th>Interval</th>
          <th>Name</th>
          <th>Contact</th>
          <th>Car</th>
          <th rowSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
        {appointmentsList.map((appointment,i) => (
          <AppointmentRow key={i} appointment={appointment} linkToAppointment={linkToAppointment} />
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default AppointmentsTable;