var quizQuestions = questions
var startBtn = document.querySelector("#startquiz")
var questionText = document.querySelector("#question")
var ulChoices = document.querySelector("#choices")
var questionIndex = 0

function generateQuestion(){

	questionText.textContent = quizQuestions[questionIndex].question

	quizQuestions[questionIndex].choices.forEach((choice, index) => {
		var li = document.createElement("li")
		var btn = document.createElement("button")
		btn.type = 'button' 
		btn.textContent = choice
		btn.setAttribute("data-index", index)
		li.appendChild(btn)
		ulChoices.appendChild(li)
	})
};

function compareAnswer(clickedAnswer){
	console.log(clickedAnswer)
	if(parseInt(clickedAnswer) === quizQuestions[questionIndex].answer){
		alert("Right Answer"); 
	}else{
		alert("Wrong Answer");
	}
	clearCurrentQuestion();
	questionIndex++;
	generateQuestion();
}; 

function clearCurrentQuestion(){
	if(questionIndex === quizQuestions.length - 1){
		question.textContent = '';
	}
	ulChoices.innerHTML = '';
}

startBtn.addEventListener("click", function(){
	var jumboTron = document.querySelector(".jumbotron")

	if (jumboTron.style.display === "none"){
		jumboTron.style.display = "block";
	}else{
		jumboTron.style.display = "none";
	}

	generateQuestion();
})

ulChoices.addEventListener("click", function() {
	event.preventDefault(); 

	if(event.target.matches("button")){
		var clickedAnswer = event.target.getAttribute("data-index")
		compareAnswer(clickedAnswer);
	}
})