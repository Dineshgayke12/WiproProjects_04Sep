

let numbers = [1,2,3,4,5,6,7,8,9]



let cities : string[]

cities =["Agra","mumbai","Bhopal"]

console.log(numbers + " " +cities[1])

for (let i=0;i<cities.length;i++){
    console.log(cities[i]);
}

console.log(cities.indexOf("Agra"))




let sum = numbers.reduce((a,b) => {return a+b})
console.log("Sum =" +sum);

function pass(element, index,array){
    return(element >=50)

}

var passed =[49,55,68,80].filter(pass)
console.log(passed)

let values = ['agra',2,'bhopal',3,4]
console.log(values)




