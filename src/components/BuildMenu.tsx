import { useState } from "react";

interface MenuProps {
  MenuTuple: [string, string[]];
  onselectdrink: (drink: string) => void;
}

function BuildMenu({ MenuTuple: [heading, drinks], onselectdrink }: MenuProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h3>{heading}</h3>
      <ul className="list-group">
        {drinks.map((drink, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item list-group-item-dark"
                : "list-group-item"
            }
            key={drink}
            onClick={() => {
              setSelectedIndex(index);
              onselectdrink(drink);
            }}
          >
            {drink}
          </li>
        ))}
      </ul>
    </>
  );
}
export default BuildMenu;
