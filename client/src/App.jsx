import logo from "./assets/images/zarla-voyage-voyage.png";
import ButtonComponent from "./components/ui/button/buttonComponent/ButtonComponent";

import "./App.css";

function App() {
  return (
    <main>
      <h1>Voyage Voyage</h1>
      <ButtonComponent text="Cliquez" handleClick="" />
      <img src={logo} alt="logo" />
    </main>
  );
}

export default App;
