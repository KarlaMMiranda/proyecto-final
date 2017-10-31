var creditNumbers = prompt("Ingresa los 16 dígitos de tu tarjeta de crédito");
if (creditNumbers === "" || creditNumbers === null){ //No acepta string vacios y null
   false;
 }
 else {
   console.log(creditNumbers);
    true;
}
var num = creditNumbers.split("");
var newNum = [];
function isValidCard (creditNumbers){
  var invertNum = num.reverse();
    for(var i = 0; i < invertNum.length; i++){
      if(i % 2 ===0){
        var parNum = (invertNum(i)*2);
         newNum.split().forEach(newNum => invertNum += parseInt(newNum));//Convertir newNum en array, llamar la función en orden y despúes convertirla en número
  }
  return creditNumbers;
 }
  console.log(isValidCard(creditNumbers));
}
