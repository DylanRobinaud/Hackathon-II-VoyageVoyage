import "./text.css";

function H2Component({ title, css }) {
  return <h2 className={`style-h2 ${css}`}>{title}</h2>;
}

export default H2Component;
