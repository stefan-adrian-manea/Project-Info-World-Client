function ClientCard({ clientData }) {
  const { firstName, lastName, email, phoneNumber } = clientData;
  return (
    <div className="client-card">
      <h3>
        {firstName} {lastName}
      </h3>
      <p>Email: {email}</p>
      <p>Phone: {phoneNumber}</p>
    </div>
  );
}

export default ClientCard;
