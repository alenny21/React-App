import ListGroup from "./ListGroup";
import Alert from "./Alert";
import './App.css'; // Make sure you have this CSS file

function App() {
  let cities = ["Manhattan", "Santo Domingo", "Puerto Plata"];
  let pokemonCities = ["Heartland", "Accumula", "Pallet", "Goldenrod", "Hearthome"];

  const handleSelectedItem = (item) => {
    console.log(item);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Alenny Almonte</h1>
        <p>📧 almontealenny@gmail.com</p>
        <p>
          <a href="https://www.linkedin.com/in/alenny" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </p>
        <p className="tagline">Passionate about front-end, cybersecurity & building cool projects 💻</p>
      </header>

      <Alert>
        Welcome to my React App! 🌟
      </Alert>

      <div className="list-section">
        <ListGroup
          items={cities}
          heading={"Favorite Cities"}
          onSelectItem={handleSelectedItem}
        />
        <ListGroup
          items={pokemonCities}
          heading={"Pokemon Cities"}
          onSelectItem={handleSelectedItem}
        />
      </div>
    </div>
  );
}

export default App;
