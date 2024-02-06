//ex1
function NombreParfait(n) {
var List=[];
for( let k=2; k<=n; k++){
let sumDivisors = 0;
for (let i = 1; i <= k / 2; i++) {
if (k % i === 0) {
sumDivisors += i;
}
}
if (sumDivisors === k)
List.push(k)
}
return List
}
//ex3:
const str1 = "abc";
const str2 = "de";
const result = [];
for (let i = 0; i < str1.length; i++) {
for (let j = 0; j < str2.length; j++) {
result.push(str1[i] + str2[j]);
}
//ex5:
function randomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
const misteriousNumber = randomNumber(0,10) ;
let essaisRestants = 3; // Nombre d'essais restants
while (essaisRestants > 0) {
const essai = parseInt(prompt("Devinez le nombre entre 0 et 10 :"));
if (isNaN(essai)) {
alert("Veuillez entrer un nombre valide.");
} else {
if (essai === misteriousNumber) {
alert("Félicitations ! Vous avez deviné le nombre.");
break; // Sort de la boucle car la devinette est correcte
} else {
essaisRestants--;
if (essaisRestants > 0)
alert('Incorrect. Il vous reste '+essaisRestants+' essais.');
else
alert('perdu, le nombre étais :'+ misteriousNumber);
}
}
}