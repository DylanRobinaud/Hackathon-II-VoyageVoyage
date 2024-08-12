import PropTypes from "prop-types";

import "../Button.css";

function ButtonSubmit({ text, handleClick, css }) {
  return (
    <button type="submit" className={`btn ${css}`} onClick={handleClick}>
      {text}
    </button>
  );
}

ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  css: PropTypes.string.isRequired,
};

export default ButtonSubmit;
