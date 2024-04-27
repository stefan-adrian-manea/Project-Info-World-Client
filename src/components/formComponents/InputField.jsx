function InputField({ id, name, label, type, value, onChange, required, ...otherProps }) {
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
        {...otherProps}
      />
    </div>
  );
}

export default InputField;
