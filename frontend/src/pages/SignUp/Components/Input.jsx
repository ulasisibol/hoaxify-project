export function Input(props) {
  // eslint-disable-next-line react/prop-types
  const { id, label, error, onChange, type } = props;

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className={error ? "form-control is-invalid" : "form-control"}
        id={id}
        type={type}
        onChange={onChange}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
}
