import InputField from "../formComponents/InputField";
function ClientFieldset({ formData, handleClientChange, handleAddCar }) {
  return (
    <div className="client-fieldset">
      <h2>Client information</h2>
      <InputField
        id="firstName"
        name="firstName"
        label="First Name"
        type="text"
        value={formData.firstName}
        onChange={handleClientChange}
        required
      />
      <InputField
        id="lastName"
        name="lastName"
        label="Last Name"
        type="text"
        value={formData.lastName}
        onChange={handleClientChange}
        required
      />
      <InputField
        id="email"
        name="email"
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleClientChange}
        required
      />
      <InputField
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        type="tel"
        value={formData.phoneNumber}
        onChange={handleClientChange}
        required
      />
      <button type="button" onClick={handleAddCar}>
        Add new car
      </button>
    </div>
  );
}

export default ClientFieldset;
