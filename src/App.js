import "./App.css";
import Header from "./Header/Header";

function App() {
  const objekat = new Object();
  objekat.ime = "Kerim";

  return (
    <div className="App">
      <Header></Header>
    </div>
  );
}

export default App;
