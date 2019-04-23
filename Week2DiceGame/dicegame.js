let roundArray = [4, 6, 8, 10, 20, 50];
let lavaArray = [];
let doubleArray = ["3", "5"];
let easterEggArray = ["8", "11", "18", "39", "44"];
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
		alert("Rolling d10. All Zeroes are now Lava! Is there any escape?");
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
	if (easterEggArray.includes(resultString)){
		switch(resultString.charAt(resultString.length - 1)){
		case "1":
		currentScore++;
		currentScore = currentScore * 3;
		alert("You rolled an " + diceResult + ". Lucky you, you found the Easter Egg! I had to code a whole new branch to say 'an " + diceResult + "' instead of 'a " + diceResult + "'. Triple points!! New Score is " + currentScore + ".");
		break;
		case "4":
		alert("You rolled a " + diceResult + ". Really? How much more 'Four' can you get? You take a running start, then leap into the air and swan dive into the Lava with a stunning grace. It's breathtaking, really. I mean, you're still dead. But wow.");
		roundNumber = 6;
		break;
		case "8":
		alert("You rolled an " + diceResult + ". This is a bit of an Easter Egg, since I had to code a new branch to say 'an " + diceResult + "' instead of 'a " + diceResult + "'. Unfortunately, we both know Eights are Lava. So you still lose.");
		roundNumber = 6;
		break;
		case "9":
		alert("You've been building up speed as you've been deftly hopping over the lava from rock to rock, dodging rising pillars of smoke and cascading liquid rock. You're getting so close, the end is in sight. Then, like the Road Runner, you stop on a dime mere centimeters from the edge of a precipice and see the boiling hellscape stretching out before you. Fours. Fours, as far as the eye can see. You stumble back as an explosion rocks you from below, knocking you to the ground. So hot. So hopeless. It would be so easy to just give up, to just lay here and let the heat overtake you. Just then, at your darkest moment, you hear a faint sound rising over the din of the world falling apart. You sit up and cough, shielding your eyes from the dust and searching for the sound. Then you see the helicopter descending through the clouds, and it's heading your way. You jump to your feet and wave your arms, desperately trying to get the pilot's attention. When it nears, a ladder drops down and you grab on for dear life. The pilot calls down to you, but you can't hear her over the spinning blades and exploding rocks. So you climb. Hand over hand, rung over rung. Finally you get to cabin and collapse on the floor. With ragged breaths, you call out to the pilot, 'What did you say?'. She yells back, 'I said, you rolled a " + diceResult + ". Cutting it pretty close, aren't you? Triple Points!'");
			currentScore++;
			currentScore = currentScore * 3;
		}
	}
	else{
		let judgedValue = resultString.charAt(resultString.length - 1);
		if (resultString.includes("4")){
			judgedValue = "4";
		}
		if (lavaArray.includes(judgedValue)){
			alert("You rolled a " + diceResult + ". You're in the Lava! You Lose! Better luck next time!");
			roundNumber = 6;
		}
		else if (doubleArray.includes(judgedValue)){
			currentScore++;
			currentScore += currentScore;
			alert("You rolled a " + diceResult + ", that was close! Your fancy footwork has narrowly avoided the lava! Double Points! New score is " + currentScore + ".");
		}
		else {
			currentScore++;
			alert("You rolled a " + diceResult + ". You're safe for now! New Score is " + currentScore + ".");
		}
	}
}

function populateLavaArray(){
	let increasedLavaFlow = roundArray[roundNumber].toString()
	lavaArray.push(increasedLavaFlow.charAt(increasedLavaFlow.length - 1));
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