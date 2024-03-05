import BuildMenu from "./components/BuildMenu";
import Title from "./Title";
import DrinkType from "./components/DrinkTypes";
import { useState } from "react";

function App() {
  const DrinkTypes: DrinkType[] = [
    {
      Type: "Classic's",
      Drinks: ["Latte", "Mocha", "Cappaccino"],
    },
    {
      Type: "Espresso's",
      Drinks: ["Double", "Macciato", "Con Panna"],
    },
    {
      Type: "Tea's",
      Drinks: ["London Fog", "Earl Grey", "Herbal Mint"],
    },
  ];

  const [selectedMenuIndex, setSelectedMenuIndex] = useState(-1);

  return (
    <>
      <Title></Title>
      {DrinkTypes.map((drink: DrinkType, index: number) => (
        <BuildMenu
          drinkType={drink}
          menuIndex={index}
          selectedMenuIndex={selectedMenuIndex}
          setSelectedMenuIndex={setSelectedMenuIndex}
        ></BuildMenu>
      ))}
    </>
  );
}

export default App;
