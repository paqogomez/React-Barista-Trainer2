import { useState } from "react";
import DrinkType from "./DrinkTypes";

interface MenuProps {
  drinkType: DrinkType;
  menuIndex: number;
  selectedMenuIndex: number;
  setSelectedMenuIndex: any;
}

function BuildMenu({
  drinkType,
  menuIndex,
  selectedMenuIndex,
  setSelectedMenuIndex,
}: MenuProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h3>{drinkType.Type}</h3>
      <ul className="list-group" key={drinkType.Type + menuIndex}>
        {drinkType.Drinks.map((drink: string, index: number) => (
          <li
            key={drink + index}
            className={
              selectedIndex === index && selectedMenuIndex === menuIndex
                ? "list-group-item list-group-item-dark"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              setSelectedMenuIndex(menuIndex);
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
