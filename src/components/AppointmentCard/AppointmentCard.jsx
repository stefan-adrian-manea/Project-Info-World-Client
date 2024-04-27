import { Link } from "react-router-dom";

function AppointmentCard({ appointment, showDetailsLink }) {
  const { interval, clientName, contact, car, action, id } = appointment;
  return (
    <div className="appointment-card">
      <div>Interval: {interval}</div>
      <div>Name: {clientName}</div>
      <div>Contact: {contact}</div>
      <div>Car: {car}</div>
      <div>Action: {action}</div>
      <div>{showDetailsLink ? <Link to={`/appointment-service/${id}`}>Details</Link> : ""}</div>
    </div>
  );
}

export default AppointmentCard;
