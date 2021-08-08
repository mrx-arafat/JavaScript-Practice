/*

per chair =3 wood
per table =10 wood
per bed =30 wood

*/

function woodCalculator(chairQnt, tableQnt, bedQnt) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 30;

  //wood calculation
  const chairWoodQnt = chairQnt * perChairWood;
  const tableWoodQnt = tableQnt * perTableWood;
  const bedWoodQnt = bedQnt * perBedWood;

  //total wood needed

  const totalWood = chairWoodQnt + tableWoodQnt + bedWoodQnt;
  return totalWood;
}

const option = woodCalculator(1, 1, 0);
console.log(option);
