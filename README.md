<H1>Code Quiz<h1>
<p>URL: https://serene-scrubland-97632.herokuapp.com/</p>
<h2>Overview</h2>
<h3>Technologies Used</h3>
<ul>
	<li>HTML</li> 
	<li>CSS</li>
	<li>Javascript</li> 
</ul> 
<h3>Object</h3> 
<p>The objects of this assignment was to create a code quiz page from scratch. A user is presented with a quiz when then view the page. There are 5 questions to this quiz but more 
can be easily added by adding more quesitons to the questions.js file. This file holds an array of objects. The object consists of the question itself, 4 choices and an answer.</p

<p>When a user clicks the start quiz button, a timer is started. The user is given 120 seconds to complete the quiz. When a wrong answer is selected time is removed from the clock. If 
the users answers to many questions wrong and/or the timer reaches zero, the quiz is over and the user is presented with there score. Each right answer is awarded 20 points for a total 
for 100 points. When the quiz ends the user is promted to enter their intials to save there score. A user can then view the high scores on the high score screen</p>

<h3>Files</h3> 
<h4>HTML</h4> 
<ul>
	<li>index.html<li>
	<li>highscore.html</li> 
<ul> 
<p>These are the two html files for the quiz. index.html is the main page, this is where the quiz, timer and score input are housed. highscore.html is the page that shows a table of the 
top 5 users initials and their score.</p> 
<h4>Javascript</h4> 
<ul> 
	<li>script.js</li> 
	<li>highscore.js</li> 
	<li>questions.js</li> 
</ul> 
<p>There are there javascript files for this asssignment. The main file, script.js houses most of the logic for the pages. This file controls most of the display for the page as well as the 
counter, calcuating the score and storging data to local storage. The highscore.js simply pulls data from the local storage and builds a table on the highscore.html page. The questions.js 
is just an array of objects that is imported to be used as the questions for the quiz.</p>


