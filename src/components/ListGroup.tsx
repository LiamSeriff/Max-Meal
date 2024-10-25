import { useState } from "react";

// { items: [], heading: string }
interface ListGroupProps {
  items: string[];
  heading: string;
  // (itemL: string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li> //key={item} only works as long as all items are unique, in real life scenarios it would be something like key={item.id}
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
