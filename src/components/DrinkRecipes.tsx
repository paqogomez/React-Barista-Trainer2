function GetRecipe(selectedDrink: string) {
  let ClassicDrinks = ["latte", "mocha"];

  let EspressoDrinks = ["double", "macciato"];

  let TeaDrinks = ["london fog", "earl grey"];

  console.log(ClassicDrinks.includes(selectedDrink));
  console.log(EspressoDrinks.includes(selectedDrink));
  console.log(TeaDrinks.includes(selectedDrink));
}
