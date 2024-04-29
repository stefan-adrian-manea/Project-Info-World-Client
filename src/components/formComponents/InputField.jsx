function InputField({ id, name, label, type, value, onChange, required, ...otherProps }) {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
        {required && <span className="text-danger">*</span>}:
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
