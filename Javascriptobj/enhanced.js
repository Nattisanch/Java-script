let inputsUser = [];

inputsUser.push(prompt("Enter an adjective:"));
inputsUser.push(prompt("Enter an noun:"));
inputsUser.push(prompt("Enter an verb:"));
inputsUser.push(prompt("Enter an type of villain:"));
inputsUser.push(prompt("Enter an silly name:"));
inputsUser.push(prompt("Enter an emotion:"));

let favoriteHero = {
  name: "Super Cat",
  superPower: "Meowzers attack",
  homeLand: "Mewsa"
};


console.log("Welcome to madlibs enhanced by Natalie Sanchez!")
console.log("It was a", inputsUser[0],"day in the land of", favoriteHero.homeLand,"and",favoriteHero.name,"was relaxing on her favorite",inputsUser[1],". Just as she began to",inputsUser[2],"an evil",inputsUser[3],"appeared in the sky!");
console.log("'Not today!' Shouted", favoriteHero.name,"as she prepared to unleash her ultimate attack the",favoriteHero.superPower);
console.log("The villain known as",inputsUser[4],"laughed loudly and tried to escape but", favoriteHero.name,"was too fast!");
console.log("With a pounce and a flash, the villain was defeated and the people of ", favoriteHero.homeLand,"cheered and felt",inputsUser[5]);

