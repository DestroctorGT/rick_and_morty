import "./App.css";
import Cards from "./Components/Cards.jsx";
import SearchBar from "./Components/SearchBar.jsx";
import characters from "./data.js";

function App() {
  return (
    <div className="App">
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
