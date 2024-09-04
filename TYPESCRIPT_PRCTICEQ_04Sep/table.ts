
function printMultiplicationTable(num: number, limit: number): void {
    for (let i = 1; i <= limit; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}


printMultiplicationTable(5, 10);
