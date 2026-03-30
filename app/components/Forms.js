import { sharedStyles, colors } from "../styles";

export const FormInput = ({ label, type = "text", placeholder, value, onChange, className = "" }) => {
  return (
    <div style={sharedStyles.formGroup}>
        <label style={sharedStyles.labelStyle}>{label}</label>
      <input
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        style={sharedStyles.inputStyle}
        className={`focus:outline-none focus:ring-2 focus:ring-black-400 transition-all ${className}`}
      />
    </div>
  );
};