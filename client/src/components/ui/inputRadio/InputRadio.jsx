import "./InputRadio.css";

function InputRadio({ datas, type, name }) {
  return (
    <div className={type}>
      {datas.map((data) => (
        <div key={data.id}>
          <input type={type} id={data.id} name={name} value={data.name} />
          <label htmlFor={data.name}>{data.name}</label>
        </div>
      ))}
    </div>
  );
}

export default InputRadio;
