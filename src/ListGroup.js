function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  let selectedIndex = -1;

  const getMessage = () => {
    return items.length === 0 && <p>No item found</p>;
    // or alternatively
    // return items.length === 0 ? <p>No item found</p>
  };

  const handleClick = (event) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className={"list-group-item"} key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
