const generateCoinChange = cents => {
    let quarter = 0;
    let dime = 0;
    let nickel = 0;
    let penny = 0;
    let remainingChange = parseInt(document.getElementById("cents").value);
    // let remainingChange = cents;
    
    const getNumberOfCoins = (coinValue) => {
      let numberOfCoins = Math.floor(remainingChange/coinValue);
      remainingChange = remainingChange - (numberOfCoins * coinValue)
      
      return numberOfCoins
    };
    
    quarter = getNumberOfCoins(25);   
    dime = getNumberOfCoins(10);    
    nickel = getNumberOfCoins(5);    
    penny = getNumberOfCoins(1);
    
    console.log(`Quarters: ${quarter}, Dimes: ${dime}, Nickels: ${nickel}, Pennies: ${penny}`)

    document.getElementById("quarters").value = quarter;
    document.getElementById("dimes").value = dime;
    document.getElementById("nickels").value = nickel;
    document.getElementById("pennies").value = penny;
};

// generateCoinChange(94);
document.getElementById("calculate").addEventListener("click", generateCoinChange);
