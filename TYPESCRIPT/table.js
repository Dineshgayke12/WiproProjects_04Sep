// TypeScript code to print the multiplication table of 5
function printMultiplicationTable(num, limit) {
    for (var i = 1; i <= limit; i++) {
        console.log("".concat(num, " x ").concat(i, " = ").concat(num * i));
    }
}
// Call the function to print the table of 5 up to 10
printMultiplicationTable(5, 10);
