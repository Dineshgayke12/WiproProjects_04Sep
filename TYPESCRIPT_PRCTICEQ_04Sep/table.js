function printMultiplicationTable(num, limit) {
    for (var i = 1; i <= limit; i++) {
        console.log("".concat(num, " x ").concat(i, " = ").concat(num * i));
    }
}
printMultiplicationTable(5, 10);
