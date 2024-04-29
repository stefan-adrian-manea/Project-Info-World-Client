import { Link } from "react-router-dom";
function ClientRow({ client, isEditing }) {
  return (
    <tr>
      <td>{client?.lastName}</td>
      <td>{client?.firstName}</td>
      <td>{client?.email}</td>
      <td>{client?.phoneNumber}</td>
      <td>
        <Link to={`/appointment-add/${client?.id}`}>Add Appointment</Link>
      </td>
      {isEditing ? (
        <td>
          <Link to={`/client/edit/${client?.id}`}>Edit Client</Link>
        </td>
      ) : (
        <td>
          <Link to={`/client/${client?.id}`}>View Client</Link>
        </td>
      )}
    </tr>
  );
}

export default ClientRow;
