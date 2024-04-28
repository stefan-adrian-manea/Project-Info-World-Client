function InputField({ id, name, label, type, value, onChange, required, ...otherProps }) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
        {required ? "*" : ""}:
      </label>
      <input
        type={type}
        className={type === "checkbox" ? "form-check-input" : "form-control"}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        {...otherProps}
      />
    </div>
  );
}

export default InputField;
