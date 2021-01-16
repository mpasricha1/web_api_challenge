var tableBody = document.querySelector("#tablebody")

function loadHighscores(){
	var userDataArr = JSON.parse(localStorage.getItem("userDataArr"));

	userDataArr.sort(function (a,b){
		return b.score - a.score
	}); 

	for(var i=0; i<5; i++){
		var row = document.createElement("tr");
		var col1 = document.createElement("td"); 
		var col2 = document.createElement("td"); 
		var text1 = document.createTextNode(userDataArr[i].initials);
    	var text2 = document.createTextNode(userDataArr[i].score);
		col1.appendChild(text1)
		col2.appendChild(text2)
		row.appendChild(col1)
		row.appendChild(col2)
		tableBody.appendChild(row)

	};
}

loadHighscores()