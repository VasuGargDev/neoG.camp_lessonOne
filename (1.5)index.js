for (var i=0; i < 5; i+=1) {
  console.log(i+1+"."+" Vasu Garg");
}

for (var i=0; i < 5; i+=1) {
  console.log(i+22);
}

//star pattern without string
for (var j=0; j < 5; j+=1) {
  console.log("*".repeat(j+1));
}

//
console.log("")
//

for (var j=5; j >= 1; j-=1) {
  console.log("*".repeat(j));
}

//
console.log("")
//using string

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


