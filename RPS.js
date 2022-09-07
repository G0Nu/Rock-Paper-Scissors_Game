/*Rock paper scissors game! Just to have a fun, I tried using only conditionals - later I will update it with a more visual version */
/*Getting a random number for the CPU */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }


function Play(option){
    /*Using the random number to asign a random option */
    var num = getRandomInt(1,4);
    if (num == 1){
        cpu = "rock";
    }
    else if(num == 2){
        cpu = "paper";
    }
    else {
        cpu = "Scissors"
    }
  /*Assigning the option player choose */
    if (option == 1){
        option = "rock";
    }
    else if(option == 2){
        option = "paper";
    }
    else {
        option = "Scissors"
    }
    /*
    Judging if the player win, lose or tie
    */
   if((option == 'rock' && cpu == "Scissors")||(option == 'paper' && cpu == "rock")||(option == 'Scissors' && cpu == "paper")){
    alert("You win! \n You: "+option+" vs CPU: " +cpu);
   }
   else if(option === cpu){
    alert("Tie \n You: "+option+" vs CPU: " +cpu);
   }
   else{
    alert("You lose! \n You: "+option+" vs CPU: " +cpu);
   }
}
/*Running the funcion with the player's choose parameter*/
Play(1);