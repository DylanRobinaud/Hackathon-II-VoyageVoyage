import "./text.css";

function H3Component({ title, css }) {
  return <h3 className={`style-h3 ${css}`}>{title}</h3>;
}

export default H3Component;
