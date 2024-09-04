var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var cities;
cities = ["Agra", "mumbai", "Bhopal"];
console.log(numbers + " " + cities[1]);
for (var i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
console.log(cities.indexOf("Agra"));
var sum = numbers.reduce(function (a, b) { return a + b; });
console.log("Sum =" + sum);
function pass(element, index, array) {
    return (element >= 50);
}
var passed = [49, 55, 68, 80].filter(pass);
console.log(passed);
var values = ['agra', 2, 'bhopal', 3, 4];
console.log(values);
