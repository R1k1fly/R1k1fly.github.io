function change_text(number){
  if (document.getElementById("player").innerHTML == "Player 1"){
      if (document.getElementById(number).innerHTML == "X"){
      alert("Already taken!");
    }else if(document.getElementById(number).innerHTML == "O"){
       alert("Already taken!");
    }else if(document.getElementById(number).innerHTML == ""){
      document.getElementById(number).innerHTML = "X";
      turn();
    }
  }else if(document.getElementById("player").innerHTML == "Player 2"){
    if (document.getElementById(number).innerHTML == "X"){
      alert("Already taken!");
    }else if(document.getElementById(number).innerHTML == "O"){
       alert("Already taken!");
    }else if(document.getElementById(number).innerHTML == ""){
      document.getElementById(number).innerHTML = "O";
      turn();
  } else {

  }
  }
  winner();
}

function winner(){
  if (document.getElementById("box_1").innerHTML == "X" && document.getElementById("box_2").innerHTML == "X"  && document.getElementById("box_3").innerHTML == "X"){
    document.getElementById("player").sty
    document.getElementById("player").innerHTML = "Player 1 wins!";
    
}else if (document.getElementById("box_4").innerHTML == "X" && document.getElementById("box_5").innerHTML == "X"  && document.getElementById("box_6").innerHTML == "X"){
    document.getElementById("player").innerHTML = "Player 1 wins!";
    
}else if (document.getElementById("box_7").innerHTML == "X" && document.getElementById("box_8").innerHTML == "X"  && document.getElementById("box_9").innerHTML == "X"){
    document.getElementById("player").innerHTML = "Player 1 wins!";
    
}else if (document.getElementById("box_1").innerHTML == "X" && document.getElementById("box_4").innerHTML == "X"  && document.getElementById("box_7").innerHTML == "X"){
    document.getElementById("player").innerHTML = "Player 1 wins!";
    
}else if (document.getElementById("box_2").innerHTML == "X" && document.getElementById("box_5").innerHTML == "X"  && document.getElementById("box_8").innerHTML == "X"){
    document.getElementById("player").innerHTML = "Player 1 wins!";
    
}else if (document.getElementById("box_3").innerHTML == "X" && document.getElementById("box_6").innerHTML == "X"  && document.getElementById("box_9").innerHTML == "X"){
    document.getElementById("player").innerHTML = "Player 1 wins!";
    
}else if (document.getElementById("box_1").innerHTML == "X" && document.getElementById("box_5").innerHTML == "X"  && document.getElementById("box_9").innerHTML == "X"){
    document.getElementById("player").innerHTML = "Player 1 wins!";
    
}else if (document.getElementById("box_3").innerHTML == "X" && document.getElementById("box_5").innerHTML == "X"  && document.getElementById("box_7").innerHTML == "X"){
    document.getElementById("player").innerHTML = "Player 1 wins!";
    
}

else if (document.getElementById("box_4").innerHTML == "O" && document.getElementById("box_5").innerHTML == "O"  && document.getElementById("box_6").innerHTML == "O"){
    document.getElementById("player").innerHTML = "Player 2 wins!";
    
}else if (document.getElementById("box_7").innerHTML == "O" && document.getElementById("box_8").innerHTML == "O"  && document.getElementById("box_9").innerHTML == "O"){
    document.getElementById("player").innerHTML = "Player 2 wins!";
    
}else if (document.getElementById("box_1").innerHTML == "O" && document.getElementById("box_4").innerHTML == "O"  && document.getElementById("box_7").innerHTML == "O"){
    document.getElementById("player").innerHTML = "Player 2 wins!";

}else if (document.getElementById("box_2").innerHTML == "O" && document.getElementById("box_5").innerHTML == "O"  && document.getElementById("box_8").innerHTML == "O"){
    document.getElementById("player").innerHTML = "Player 2 wins!";

}else if (document.getElementById("box_3").innerHTML == "O" && document.getElementById("box_6").innerHTML == "O"  && document.getElementById("box_9").innerHTML == "O"){
    document.getElementById("player").innerHTML = "Player 2 wins!";

}else if (document.getElementById("box_1").innerHTML == "O" && document.getElementById("box_5").innerHTML == "O"  && document.getElementById("box_9").innerHTML == "O"){
    document.getElementById("player").innerHTML = "Player 2 wins!";

}else if (document.getElementById("box_3").innerHTML == "O" && document.getElementById("box_5").innerHTML == "O"  && document.getElementById("box_7").innerHTML == "O"){
    document.getElementById("player").innerHTML = "Player 2 wins!";
} else{
    if (document.getElementById("box_1").innerHTML != "" && document.getElementById("box_2").innerHTML != ""  && document.getElementById("box_3").innerHTML != "" && document.getElementById("box_4").innerHTML != "" && document.getElementById("box_5").innerHTML != ""  && document.getElementById("box_6").innerHTML != "" && document.getElementById("box_7").innerHTML != "" && document.getElementById("box_8").innerHTML != ""  && document.getElementById("box_9").innerHTML != ""){
        document.getElementById("player").innerHTML = "Draw!";
    }
}
}

function turn(){
  if (document.getElementById("player").innerHTML == "Player 2"){
    document.getElementById("player").innerHTML = "Player 1";
  }else if(document.getElementById("player").innerHTML == "Player 1"){
    document.getElementById("player").innerHTML = "Player 2";
  }else if (document.getElementById("player").innerHTML == "Player 1 wins!"){
    document.getElementById("player").innerHTML = "Player 2";
  }else if(document.getElementById("player").innerHTML == "Player 2 wins!"){
    document.getElementById("player").innerHTML = "Player 1";
  }
}

function reset(){
  document.getElementById("box_1").innerHTML = "";
  document.getElementById("box_2").innerHTML = "";
  document.getElementById("box_3").innerHTML = "";
  document.getElementById("box_4").innerHTML = "";
  document.getElementById("box_5").innerHTML = "";
  document.getElementById("box_6").innerHTML = "";
  document.getElementById("box_7").innerHTML = "";
  document.getElementById("box_8").innerHTML = "";
  document.getElementById("box_9").innerHTML = "";
  document.getElementById("player").innerHTML = "Player 1"
}
