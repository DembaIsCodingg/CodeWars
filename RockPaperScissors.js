//PREP
//i have to do a simple rps game && player1 || player2 || Draw
//p1 | p2 && case insensitive 

const rps = (p1, p2) => {
  
    //if(p1 === p2) = draw
    
    let player1 = p1.toLowerCase()
    let player2 = p2.toLowerCase()
    
    if(player1 === player2){
      return 'Draw!'
    }
    if(player1 == "scissors" && player2 == "paper" || player1 == "paper" && player2 == "rock"|| player1 == "rock" && player2 === "scissors"){
      return 'Player 1 won!'
    }else{
      return 'Player 2 won!'
    }
    
  };
  