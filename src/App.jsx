import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);

  const handleCheck = (id) => {
    // console.log(`key: ${id}`);
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    // console.log(id);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };
  return (
    <div className="App">
      <Header title="Groceries List" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
