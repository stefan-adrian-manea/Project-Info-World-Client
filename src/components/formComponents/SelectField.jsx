function SelectField({ id, name, label, value, options, onChange, required }) {
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <select id={id} name={name} value={value} onChange={onChange} required={required}>
        <option value="" > select engine type </option>
        {options.map((option, i) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
