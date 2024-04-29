import { useNavigate } from "react-router-dom";
function AppointmentRow({ appointment, linkToAppointment }) {
  const { interval, clientName, contact, car, action, id } = appointment;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/appointment-service/${id}`);
  };
  return (
    <tr onClick={linkToAppointment ? handleClick : null}>
      <td>{interval}</td>
      <td>{clientName}</td>
      <td>{contact}</td>
      <td>{car}</td>
      <td>{action}</td>
      <td>{action}</td>
    </tr>
  );
}

export default AppointmentRow;
