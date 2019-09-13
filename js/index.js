function luckySevens(){

    var startingbet = document.getElementById("startingbet").value;
    var money = 0;
    var dice1 = 0;
    var dice2 = 0;
    var dice = 0;
    var rollCount = 0;
    var unLuckyCounter = 0;
    var money = startingbet;
    var moneyHeld = [startingbet];
    var win = 4;
    var loss = 1;
    var maxHeld = 0;
    // var maxHeldCounter[0];   
        
    
        do{
            // dice roller radomizer
            rollCount++;
            dice1 = Math.floor(Math.random() * 6) + 1;
            dice2 = Math.floor(Math.random() * 6) + 1;  
            dice = dice1+dice2;
    
                // WINNING LOOP
                if (dice == 7){
                money = money+win; // add $4 to money used to make bets
                var last_element = moneyHeld[moneyHeld.length -1]; 
                var last_updated = last_element + win; 
                moneyHeld.push(last_updated);
            }
    
                // LOSING LOOP
                else {
                money--;
                unLuckyCounter++;
                    // maxMoney.push(0);
                var last_element = moneyHeld[moneyHeld.length -1];
                var last_updated = last_element - loss;
                moneyHeld.push(last_updated);
                rollCount = rollCount++;
                }
    
    
        }while(money>0);
        var totalMax = 0;
    
        totalMax = Math.max.apply(Math, moneyHeld);
        numRolls = moneyHeld.indexOf(totalMax); 
        if(numRolls<1){
            numRolls = 0;
        }
    
        document.getElementById("p1").innerHTML=("<center><br><br><table style=\"width: 100% height: 100%;\"><th colspan=\"2\"; class=\"th1\">Results</th><tr><th class=\"th2\">Starting Bet</th><th class=\"th2\">$" + startingbet + ".00</th></tr><tr><td>Total Rolls Before Going Broke</td><td>"+ rollCount +"</td></tr><tr><td>Highes Amount Won</td><td>"+totalMax+"</td></tr><tr><td>Roll Count at Highest Amount Won</td><td>"+ numRolls + "</td></tr></table></center>");
        document.getElementById("p2").innerHTML="Play Again";
    
    } // end of lucky sevens function