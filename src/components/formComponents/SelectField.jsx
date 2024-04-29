function SelectField({ id, name, label, value, options, onChange, required }) {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={id}>
        {label} {required && <span className="text-danger">*</span>}:
      </label>
      <select
        className="form-select"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
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
