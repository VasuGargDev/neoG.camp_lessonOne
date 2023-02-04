var superman = {
  name: "superman",
  power: "flight",
  costumeColor: "blue",
  strength: 1000,
  stealth: 0
}

var batman = {
  name: "batman",
  power: "martial arts",
  costumeColor: "black",
  strength: 100,
  stealth: 100
}

console.log(superman.strength);

console.log(batman.strength);

console.log(superman.strength > batman.strength);


// create array of superhero objects 
// print name and costume of every superhero in array list
var superHeroes = [superman, batman];
  
for (var i=0; i<superHeroes.length; i++){
  var currentHero = superHeroes[i]; 
  console.log(currentHero.name);
  console.log(currentHero.costumeColor);
  console.log("-/-/-/-/-/-/-")
}


