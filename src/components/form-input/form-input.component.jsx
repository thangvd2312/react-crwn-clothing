import "./form-input.styles.scss";
const FormInput = ({ label, ...ortherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...ortherProps} />
      {label && (
        <label
          className={`${
            ortherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
export default FormInput;
