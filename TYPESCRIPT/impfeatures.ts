let symbol='$';

function convertCurrency(amt:number){
    var symbol="£"
    amt *= 50*amt
    console.log(symbol + amt);
}

convertCurrency(100)
