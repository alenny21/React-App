import ListGroup from "./ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let items2 = ["Heartland", "Accumula", "Pallet", "Goldenrod", "Hearthome"];
  return (
    <div>
      <ListGroup items={items} heading={"Cities"} />
      <ListGroup items={items2} heading={"Pokemon Cities"} />
    </div>
  );
}

export default App;
