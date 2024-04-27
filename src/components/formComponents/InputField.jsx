function InputField({ id, name, label, type, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        {required ? "*" : ""}:
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}

export default InputField;
