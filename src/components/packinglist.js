import { useState } from "react";
import Item from "./item";

export default function PackingList({
  items,
  onDeleteItem,
  ontoggleItem,
  onClearList,
}) {
  const [sortBy, SetSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "descripton")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            ontoggleItem={ontoggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => SetSortBy(e.target.value)}>
          <option value="input"> Sort by input orders</option>
          <option value="descripton"> Sort by description</option>
          <option value="packed"> Sort by packed status</option>
        </select>

        <button onClick={onClearList}>clear list</button>
      </div>
    </div>
  );
}
