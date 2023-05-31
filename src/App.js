import ListGroup from "./ListGroup";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let items2 = ["Heartland", "Accumula", "Pallet", "Goldenrod", "Hearthome"];

  const handleSelectedItem = (item) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectedItem}
      />
      <ListGroup
        items={items2}
        heading={"Pokemon Cities"}
        onSelectItem={handleSelectedItem}
      />
    </div>
  );
}

export default App;
