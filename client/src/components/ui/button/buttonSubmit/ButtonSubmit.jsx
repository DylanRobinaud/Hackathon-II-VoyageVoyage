import PropTypes from "prop-types";

import "../Button.css";

function ButtonSubmit({ text, handleClick }) {
  return (
    <button type="submit" onClick={handleClick}>
      {text}
    </button>
  );
}

ButtonSubmit.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default ButtonSubmit;
