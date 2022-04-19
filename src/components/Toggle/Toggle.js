import './Toggle.css';

const Switch = ({ name, isOn, handleToggle, onColor }) => {
    return (
      <>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="toggle_checkbox"
          id={`toggle-${name}`}
          type="checkbox"
        />
        <label
          style={{ backgroundColor: isOn && onColor }}
          className="toggle_label"
          htmlFor={`toggle-${name}`} >
          <span className="toggle_button" />
        </label>
      </>
    );
  };
  
  export default Switch;