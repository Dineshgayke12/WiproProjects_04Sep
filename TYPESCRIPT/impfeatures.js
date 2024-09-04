var symbol = '$';
function convertCurrency(amt) {
    var symbol = "£";
    amt *= 50 * amt;
    console.log(symbol + amt);
}
convertCurrency(100);
