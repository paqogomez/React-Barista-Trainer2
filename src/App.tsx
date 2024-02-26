import BuildMenu from "./components/BuildMenu";
import Title from "./Title";
import DrinkTypes from "./components/DrinkTypes";

function App() {
  const DrinkDict: DrinkTypes[] = [
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
  const handleSelectDrink = (drink: string) => {
    console.log(drink);
  };
  const handleMenu: DrinkTypes[] = DrinkDict;

  return (
    <>
      <Title></Title>
      <BuildMenu
        objMenu={handleMenu}
        onselectdrink={handleSelectDrink}
      ></BuildMenu>
    </>
  );
}

export default App;
