let roundArray = [4, 6, 8, 10, 20, 50];
let lavaArray = ["0"];
let doubleArray = ["3", "5"];
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
	lavaBackground();
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
		alert("Rolling d10. All zeroes are now Lava! Is there any escape?");
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
		currentScore += 5;
		alert("You escaped the lava, great job! Bonus Points! Final Score is " + currentScore + ".");
		break;
		case 7:
		if (currentScore > highScore){
		alert("New High Score!");
		highScore = currentScore;
		document.getElementById("printedScore").innerHTML = highScore;
		}
		alert("Game Over. Final Score: " + currentScore + ". Today's High Score: " + highScore + ". Try again?");
		currentScore = 0;
		normalBackground();
		lavaArray = ["0"];
		break;
		}
	}
}

function scoreRound(){
	populateLavaArray();
	let diceResult = diceRoll(roundArray[roundNumber]);
	let resultString = diceResult.toString();
	let resultArray = resultString.split("");
	let judgedValue = (resultArray[resultArray.length - 1])
	if (resultArray.includes("4")){
		judgedValue = "4";
	}
	if (lavaArray.includes(judgedValue)){
		alert("You rolled a " + diceResult +". You're in the Lava! You Lose! Better luck next time!");
		roundNumber = 6;
	}
	else if (doubleArray.includes(judgedValue)){
		currentScore++;
		currentScore += currentScore;
		alert("You rolled a " + diceResult +", that was close! Your fancy footwork has narrowly avoided the lava! Double Points! New score is " + currentScore + ".");
	}
	else {
		currentScore++;
		alert("You rolled a " + diceResult +". You're safe for now! New Score is " + currentScore + ".");
	}

}

function populateLavaArray(){
	let increasedLavaFlow = roundArray[roundNumber].toString()
	lavaArray.push(increasedLavaFlow);
//		for (i = 0; i <= roundArray[roundNumber]; i++) {
//		let lavaCheckerString = i.toString();
//		let lavaCheckerArray = lavaCheckerString.split("");
//		if (lavaCheckerArray.length > 1){
//			if (magicLavaNumbers.includes(lavaCheckerArray[lavaCheckerArray.length - 1])){
//				lavaArrayTester.push(i);
//			}
//			else if(i == roundArray[roundNumber]){
//				lavaArrayTester.push(i);
//			}
//		}
//	}
}


function populateDoubleArray(){
}

function lavaBackground(){
	document.body.style.backgroundImage = "url('lava.jpg')";
}

function normalBackground(){
	document.body.style.backgroundImage = "url('start.png')";
}