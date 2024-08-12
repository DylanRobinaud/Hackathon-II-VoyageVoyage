import ReactSlider from "react-slider";
import "./Slider.css";

function Slider({ values, handleChange, min, max }) {
  return (
    <ReactSlider
      className="horizontal-slider"
      thumbClassName="slider-dots"
      trackClassName="slider-bar"
      value={values}
      onChange={handleChange}
      min={min}
      max={max}
      pearling
      minDistance={10}
      renderThumb={(props, state) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <div {...props}>
          <div className="dots-value">{state.valueNow}</div>
        </div>
      )}
    />
  );
}

export default Slider;
