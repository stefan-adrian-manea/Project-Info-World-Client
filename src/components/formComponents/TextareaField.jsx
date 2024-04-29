function TextareaField({ id, name, label, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
        {required && <span className="text-danger">*</span>}:
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="form-control"
      />
    </div>
  );
}

export default TextareaField;
