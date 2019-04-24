let highScore = 0;
let roundArray = [4, 6, 8, 10, 20, 50];
let doubleArray = ["3", "5"];
let easterEggArray = ["8", "11", "18", "39", "44"];
let lavaArray = [];
let roundNumber = 0;
let currentScore = 0;

let diceRoll = function(numberOfSides){
	arrayOfSides = [];
	for (i = 1; i <= numberOfSides; i++){
		arrayOfSides.push(i);
	}
	let result = arrayOfSides[Math.floor(Math.random()*arrayOfSides.length)];
	return result;
}

function beginGame(){
	hideScore();
	lavaBackground();
	startRounds();
	okButton();
}

function startRounds(){
	while(roundNumber <= 7){
		switch(roundNumber){
		case 0:
		changeText("Rolling d4. Careful, the Four is Lava!");
		rollRound();
		return roundNumber; //Needed to break loop
		case 1:
		changeText("Rolling d6. Watch out! Sixes are now Lava, too!");
		rollRound();
		return roundNumber;
		case 2:
		changeText("Rolling d8. It's getting hot! Eights are now Lava!");
		rollRound();
		return roundNumber;
		case 3:
		changeText("Rolling d10. Zeroes are now Lava! Is there any escape?");
		rollRound();
		return roundNumber;
		case 4:
		changeText("Rolling d20. Where is this Lava coming from??");
		rollRound();
		return roundNumber;
		case 5:
		changeText("Rolling d50. OH GOD, SO MANY FOURS! LAVA IS EVERYWHERE!!");
		rollRound();
		return roundNumber;
		case 6:
		chopperBackground();
		currentScore += 5;
		changeText("You escaped the lava, great job! Bonus Points! Final Score is " + currentScore + ".");
		roundNumber = 7;
		return roundNumber;
		case 7:
		gameOver();
		roundNumber++;
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
		changeText("You rolled an " + diceResult + ". Lucky you, you found the Easter Egg! I had to code a whole new branch to say 'an " + diceResult + "' instead of 'a " + diceResult + "'. Triple points!! New Score is " + currentScore + ".");
		roundNumber++;
		break;
		case "4":
		changeText("You rolled a " + diceResult + ". Really? How much more 'Four' can you get? You take a running start, then leap into the air and swan dive into the Lava with a stunning grace. It's breathtaking, really. I mean, you're still dead. But wow.");
		anakinBackground();
		roundNumber = 7;
		break;
		case "8":
		changeText("You rolled an " + diceResult + ". This is a bit of an Easter Egg, since I had to code a new branch to say 'an " + diceResult + "' instead of 'a " + diceResult + "'. Unfortunately, we both know Eights are Lava. So you still lose.");
		deadBackground();
		roundNumber = 7;
		break;
		case "9":
		changeText("It's starting to get to you, all the running and jumping, hopping from rock to rock over the lava, dodging rising pillars of smoke and cascading liquid rock. But you're getting so close, you feel the end is in sight. Then, like the Road Runner, you stop on a dime mere centimeters from the edge of a precipice and see the giant boiling hellscape stretching out before you. Fours. Fours, as far as the eye can see. You stumble back as an explosion rocks you from below, knocking you to the ground. So hot. So hopeless. It would be so easy to just give up, to just lay here and let the heat overtake you. Just then, at your darkest moment, you hear a faint sound rising over the din of the world falling apart. You sit up and cough, shielding your eyes from the dust and searching for the sound. You see the helicopter descending through the clouds, and it's heading your way. You jump to your feet and wave your arms, desperately trying to get the pilot's attention. When it nears, a ladder drops down and you grab on for dear life as it lifts you away from the heat. The pilot calls down to you, but you can't hear her over the spinning blades and exploding rocks. So you climb. Hand over hand, rung over rung. Finally you get to cabin and collapse on the floor. With ragged breaths, you call out to the pilot, 'What did you say?'. She yells back, 'I said, you rolled a " + diceResult + "! Cutting it pretty close, aren't you? Triple Points!'");
			currentScore++;
			currentScore = currentScore * 3;
			roundNumber++;
		break;
		}
	}
	else{
		let judgedValue = resultString.charAt(resultString.length - 1);
		if (resultString.includes("4")){
			judgedValue = "4";
		}
		if (lavaArray.includes(judgedValue)){
			changeText("You rolled a " + diceResult + ". You're in the Lava! You Lose! Better luck next time!");
			deadBackground();
			roundNumber = 7;
		}
		else if (doubleArray.includes(judgedValue)){
			currentScore++;
			currentScore += currentScore;
			changeText("You rolled a " + diceResult + ", that was close! With some fancy footwork, you deftly hop over a stream of Lava. Double Points! New score is " + currentScore + ".");
			roundNumber++;
		}
		else {
			currentScore++;
			changeText("You rolled a " + diceResult + ". You're safe for now! New Score is " + currentScore + ".");
			roundNumber++;
		}
	}
}

function rollRound(){
		hideButton();
		setTimeout(function(){scoreRound(roundArray[roundNumber])}, 2000);
		setTimeout(function(){showButton()}, 2000);
}

function populateLavaArray(){
	let increasedLavaFlow = roundArray[roundNumber].toString();
	lavaArray.push(increasedLavaFlow.charAt(increasedLavaFlow.length - 1));
}

function lavaBackground(){
	document.body.style.backgroundImage = "url('images/lava.jpg')";
}

function normalBackground(){
	document.body.style.backgroundImage = "url('images/start.png')";
}

function chopperBackground(){
	document.body.style.backgroundImage = "url('images/chopper.jpg')";
}

function deadBackground(){
	document.body.style.backgroundImage = "url('images/dead.jpg')";
}

function anakinBackground(){
	document.body.style.backgroundImage = "url('images/anakin.jpg')";
}

function changeText(newText){
	let updatedBox = document.getElementById("gameText");
	updatedBox.innerHTML = newText;
}

function hideButton(){
	let buttonHider = document.getElementById("mainButton");
	buttonHider.style.display = "none";
}

function showButton(){
	let buttonShower = document.getElementById("mainButton");
	buttonShower.style.display = "inline-block";
}

function hideScore(){
	let scoreHider = document.getElementById("scoreTracker");
	scoreHider.style.display = "none";
}

function showScore(){
	let scoreShower = document.getElementById("scoreTracker");
	scoreShower.style.display = "inline-block";
}

function gameOver(){
	if (currentScore > highScore){
	highScore = currentScore;
	changeText("Game Over. Final Score: " + highScore + ". New High Score! Try again?");
	document.getElementById("printedScore").innerHTML = highScore;
	}
	else {
	changeText("Game Over. Final Score: " + currentScore + ". High Score: " + highScore + ". Try again?");
	}
	gameOverButton();
}

function gameOverButton(){
	let buttonChanger = document.getElementById("mainButton");
	buttonChanger.onclick = function() { resetGame() };
	changeButtonText("GAME OVER");
}

function resetButton(){
	let buttonReseter = document.getElementById("mainButton");
	buttonReseter.onclick = function() { beginGame() };
	changeButtonText("START THE LAVA!");
}

function okButton(){
	let buttonOker = document.getElementById("mainButton");
	buttonOker.onclick = function() { startRounds() };
	changeButtonText("OK");
}

function changeButtonText(newButtonText){
	let updatedButton = document.getElementById("buttonText");
	updatedButton.innerHTML = newButtonText;
}

function resetGame(){
	currentScore = 0;
	roundNumber = 0;
	lavaArray = [];
	changeText("In this game, you will make a series of dice rolls. At the start of the game, the number 4 is Lava, and with each progessive roll, the Lava expands and takes over new numbers. Lava is bad, you should avoid it. But if you roll a number adjacent to a 4, you double your points. Can you make it to the end and escape the lava?");
	normalBackground();
	resetButton();
	showScore();
}