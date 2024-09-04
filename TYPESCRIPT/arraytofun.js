var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr = new Array("Java Full stack", "2000", "Typescript", "Day1");
function show(arr1) {
    for (var i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
    }
}
show(arr);
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var copyArray = __spreadArray([], arr1, true);
console.log("Copied array " + copyArray);
var newArray = __spreadArray(__spreadArray([], arr1, true), [10, 20, 30], false);
console.log("new array" + newArray);
var combineArray = __spreadArray(__spreadArray([], arr1, true), arr2, true);
console.log("combined array" + combineArray);
console.log(arr.indexOf("2000"));
