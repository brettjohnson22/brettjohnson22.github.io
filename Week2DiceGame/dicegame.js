let roundArray = [4, 6, 8, 10, 20, 50];
let lavaArray = [4, 6, 8, 10, 14, 16, 18, 20, 24, 26, 28, 30, 34, 36, 38, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
let doubleArray = [3, 5, 13, 15, 23, 25, 33, 35];
let roundNumber = 0;
let currentScore = 0;
let highScore = 0;
let diceRoll = function(numberOfSides){
	arrayOfSides = [];
	for (i = 1; i <= numberOfSides; i++){
		arrayOfSides.push(i);
	}
	let result = arrayOfSides[Math.floor(Math.random()*arrayOfSides.length)];
	return result;
}

function startGame(){
	for(roundNumber = 0; roundNumber <= 7; roundNumber++){
		switch(roundNumber){
		case 0:
		alert("Rolling d4. Careful, the Four is Lava!");
		scoreRound(roundArray[roundNumber]);
		break;
		case 1:
		alert("Rolling d6. Sixes are now Lava! Beware!");
		scoreRound(roundArray[roundNumber]);
		break;
		case 2:
		alert("Rolling d8. It's getting hot! Eights are now Lava!");
		scoreRound(roundArray[roundNumber]);
		break;
		case 3:
		alert("Rolling d10. All Factors of Ten are Lava! Is there any escape?");
		scoreRound(roundArray[roundNumber]);
		break;
		case 4:
		alert("Rolling d20. Where is this Lava coming from??");
		scoreRound(roundArray[roundNumber]);
		break; 
		case 5:
		alert("Rolling d50. OH GOD, SO MANY FOURS! LAVA IS EVERYWHERE!!");
		scoreRound(roundArray[roundNumber]);
		break;
		case 6:
		alert("You escaped the lava, great job! Final Score is " + currentScore + ".");
		break;
		case 7:
		if (currentScore > highScore){
		alert("New High Score!");
		highScore = currentScore;
		}
		alert("Game Over. Final Score is " + currentScore + ". Today's High Score: " + highScore + ". Try again?");
		currentScore = 0;
		break;
		}
	}
}

function scoreRound(){
	let diceResult = diceRoll(roundArray[roundNumber]);
	diceResult.toString();
	if (lavaArray.includes(diceResult)){
		alert("You rolled a " + diceResult +". You're in the Lava! You Lose! Better luck next time!");
		roundNumber = 6;
		return roundNumber;
		return currentScore;
	}
	else if (doubleArray.includes(diceResult)){
		currentScore++;
		currentScore += currentScore;
		alert("You rolled a " + diceResult +", that was close! Your fancy footwork has narrowly avoided the lava! Double Points! New score is " + currentScore + ".");
	}
	else {
		currentScore++;
		alert("You rolled a " + diceResult +". You're safe for now! New Score is " + currentScore + ".");
	}
	return currentScore;
}

//Goals: High Score tracker, better HTML,  simplify arrays