var quizQuestions = questions
var startBtn = document.querySelector("#startquiz")
var questionIndex = 0

function generateQuestion(quizQuestions){
	var question = document.querySelector("#question")

	question.textContent = quizQuestions[questionIndex].question

	quizQuestions[questionIndex].choices.forEach(choice => {
		var ul = document.querySelector("#choices")
		var li = document.createElement("li")
		li.appendChild(document.createTextNode(choice))
		ul.appendChild(li)
	})
}

startBtn.addEventListener("click", function(){
	var jumboTron = document.querySelector(".jumbotron")

	if (jumboTron.style.display === "none"){
		jumboTron.style.display = "block";
	}else{
		jumboTron.style.display = "none";
	}

	generateQuestion(quizQuestions)
})