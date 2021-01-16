var quizQuestions = questions;
var startBtn = document.querySelector("#startquiz");
var questionText = document.querySelector("#question");
var ulChoices = document.querySelector("#choices");
var timeEl = document.querySelector("#timeremaining");
var scoreEl = document.querySelector("#score");
var submitBtn = document.querySelector("#submitinitials");
var questionIndex = 0;
var remainingTime = 120;
var timerInterval; 
var score = 0


function generateQuestion(){

	questionText.textContent = quizQuestions[questionIndex].question

	quizQuestions[questionIndex].choices.forEach((choice, index) => {
		var li = document.createElement("li")
		var btn = document.createElement("button")
		btn.setAttribute("class", "btn btn-outline-primary bt-lg")
		btn.setAttribute("style", "width:100%")
		btn.textContent = choice
		btn.setAttribute("data-index", index)
		li.appendChild(btn)
		ulChoices.appendChild(li)
	})
};

function compareAnswer(clickedAnswer){
	if(parseInt(clickedAnswer) === quizQuestions[questionIndex].answer){
		score+=20; 
	}else{
		remainingTime-=20;
	}
	clearCurrentQuestion();
	questionIndex++;
	if(questionIndex === quizQuestions.length){
		stopTimer();
	}else{
		generateQuestion();
	}
}; 

function clearCurrentQuestion(){
	question.textContent = '';
	ulChoices.innerHTML = '';
};

function startTimer(){
	timeEl.textContent = remainingTime; 

	timerInterval = setInterval(function(){
		if(remainingTime <= 0){
			stopTimer(); 
			return;
		}
		remainingTime--;
		timeEl.textContent = remainingTime;
	}, 1000)
}; 

function stopTimer(){
	timeEl.textContent = 0;
	clearInterval(timerInterval);
	clearCurrentQuestion();
	displayScore();
	
}; 

function displayScore(){
	if (highscore.style.display === "none" ){
		highscore.style.display = "block";
		scoreEl.textContent = score;
	}else{
		highscore.style.display = "none";
	}
};

startBtn.addEventListener("click", function(){
	var jumboTron = document.querySelector(".jumbotron")

	if (jumboTron.style.display === "none"){
		jumboTron.style.display = "block";
	}else{
		jumboTron.style.display = "none";
	}
	startTimer();
	generateQuestion();
})

ulChoices.addEventListener("click", function() {
	event.preventDefault(); 

	if(event.target.matches("button")){
		var clickedAnswer = event.target.getAttribute("data-index")
		compareAnswer(clickedAnswer);
	}
});

submitBtn.addEventListener("click", function() {
	var userData = {
		score: score, 
		initials: initials.value
	};

	if(window.localStorage.length === 0){
		var userDataArr = []; 
		userDataArr.push(userData)
		localStorage.setItem("userDataArr", JSON.stringify(userDataArr))
	}else {
		var userDataArr = JSON.parse(localStorage.getItem("userDataArr"))
		userDataArr.push(userData);
		localStorage.setItem("userDataArr", JSON.stringify(userDataArr))
	}
});