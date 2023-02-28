const Newinp = ({ name, value, onChange, placeholder, type }) => {
    return (
      <input
        style={{ border: "none", outline: "none" }}
        
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        type={type}
      />
    );
  };
  Newinp.defaultProps = {
    type: "text",
    placeholder: "Enter text here!",
  };
  export default Newinp;