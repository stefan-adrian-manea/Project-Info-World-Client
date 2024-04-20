function ClientFieldset({ formData, onChange }) {
  return (
    <div className="fieldset">
      <h2>Informatii despre client</h2>
      <div>
        <label htmlFor="firstName">Prenume:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Nume:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Numar de telefon:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={onChange}
          required
        />
      </div>
    </div>
  );
}

export default ClientFieldset;
