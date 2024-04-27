function TextareaField({ id, name, label, value, onChange, required }) {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        {required ? "*" : ""}:
      </label>
      <textarea id={id} name={name} value={value} onChange={onChange} required={required} />
    </div>
  );
}

export default TextareaField;
