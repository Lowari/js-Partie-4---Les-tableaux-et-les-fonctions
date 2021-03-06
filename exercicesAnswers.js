//Exercice 1 : Créer un tableau days et lui ajouter les jours de la semaine.
let createArray = function () {
  let days = new Array("Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche");
  return days;
}

//Exercice 2 : Retouner le 3ème élément du tableau days', function() {
let returnThirdElement = function (array) {
  let thirdElement = array[2];
  return thirdElement;
}

//Exercice 3 : Afficher la valeur de l\'index 3 du tableau days.', function() {
let returnThirdIndex = function (array) {
  let thirdIndex = array[3];
  return thirdIndex;
}

//Exercice 4 : Changer le 2ème élément du tableau languages par php.', function() {
let changeSecondElement = function (array) {
  array[1] = "php";
  return array;
}

//Exercice 5 : Ajouter ruby et python à la fin du tableau languages.', function() {
let addAtTheEnd = function (array) {
  let push = array.push("ruby", "python");
  return array;
}

//Exercice 6 : Ajouter html et css au début du tableau languages.', function() {
let addAtFirst = function (array) {
  let unshift = array.unshift('html', 'css');
  return array;
}

//Exercice 7 : Supprimer le premier élément du tableau languages.', function() {
let removeFirstElement = function (array) {
  let shift = array.shift();
  return array;
}

//Exercice 8 : Supprimer le dernier élément du tableau languages.', function() {
let removeLastElement = function (array) {
  let pop = array.pop();
  return array;
}

//Exercice 9 : Créer un tableau associatif person. Lui ajouter les index name, age et city avec les valeurs Jean, 45, Paris.', function() {
let createPerson = function () {
  let person = [];
  person["name"] = "Jean";
  person["age"] = 45 ;
  person["city"] = "Paris";
  return person;
}

//Exercice 10 : Retourner la valeur de l\'index nom du tableau person.', function() {
let returnName = function (array) {
  let name = array.name;
  return name;
}

//Exercice 11 : Stocker tous les index du tableau person dans des variables séparées et les retourner dans une même phrase de type : "Bonjour, je suis Jean. J\'ai 45 ans et j\'habite Paris."', function() {
let returnSentence = function (array) {
  let name = array.name;
  let age = array.age;
  let city = array.city;
  let phrasing = `Bonjour, je suis ${name}. J'ai ${age} ans et j'habite ${city}.`;
  return phrasing;
}

//Exercice 12 : Transformer la variable string en tableau.', function() {
let returnArray = function (string) {
  let split = string.split(',');
  return split;
}

//Exercice 13 : Trier le tableau array.', function() {
let sortArray = function (array) {
  let sort = array.sort();
  return sort;
}

//Exercice 14 : Transformer le tableau array en chaîne de caractères', function() {
let returnString = function (array) {
  let join = array.toString();
  return join;
}
