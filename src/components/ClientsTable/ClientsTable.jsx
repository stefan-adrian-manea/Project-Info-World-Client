import ClientRow from "../ClientRow/ClientRow";
function ClientsTable({ clientsList, isEditing }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clientsList.reverse().map((client, index) => (
            <ClientRow key={index} client={client} isEditing={isEditing} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientsTable;
