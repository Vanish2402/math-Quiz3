function addUser() {
    player1_name = document.getElementById("player1_name_input").value;
    player2_name = document.getElementById("player2_name_input").value;
  
      localStorage.setItem("player1_name", player1_name);
      localStorage.setItem("player2_name", player2_name);
  
      window.location = "game_page.html";
  }
  
function Number1() {
  var number1
  console.log("Number1*Number2")
}  

function Number2() {
  var number2
  console.log("number1*number2")
}