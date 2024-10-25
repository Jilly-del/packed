import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackingList from "./packinglist";
import Stats from "./stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteitems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to clear the list?"
    );

    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      {" "}
      <Logo />
      <Form onAdditem={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteitems}
        ontoggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats item={items} />
    </div>
  );
}
