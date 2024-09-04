let arr= new Array("Java Full stack","2000","Typescript","Day1")

function show(arr1:string[]){

    for(let i=0;i<arr1.length;i++){
        console.log(arr1[i])
    }
}

show(arr)


let arr1=[1,2,3]

let arr2=[4,5,6]

let copyArray = [...arr1];
console.log("Copied array " +copyArray)

let newArray =[...arr1,10,20,30]
console.log("new array" + newArray)

let combineArray= [...arr1,...arr2]
console.log("combined array" + combineArray)

console.log(arr.indexOf("2000"))