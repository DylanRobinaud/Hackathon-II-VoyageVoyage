import logo from "./assets/images/zarla-voyage-voyage.png";
import Card from "./components/card/Card";
import "./App.css";

function App() {
  return (
    <main>
      <Card town="New York" subtitle="Etats Unis" photoUrl={logo} />
    </main>
  );
}

export default App;
