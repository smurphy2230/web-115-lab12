var $ = function(id) {
  return document.getElementById(id);
}

document.getElementById("calculate").addEventListener("click", function() {
  let cents = parseInt(document.getElementById("cents").value);
  if(cents !== cents) {return;}

  let quarters = Math.floor(cents / 25);
  cents -= quarters * 25;

  let dimes = Math.floor(cents / 10);
  cents -= dimes * 10;
  
  let nickels = Math.floor(cents / 5);
  cents -= nickels * 5;

  let pennies = cents;
  cents -= pennies;

  document.getElementById("quarters").value = quarters;
  document.getElementById("dimes").value = dimes;
  document.getElementById("nickels").value = nickels;
  document.getElementById("pennies").value = pennies;
});