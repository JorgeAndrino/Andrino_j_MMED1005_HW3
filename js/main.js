// javascript 
(() => {
	(function() {
  const myQuestions = [
    {
      question: "When dose the story happend?",
      answers: {
        a: "In the 24rd century",
        b: "In the 23rd century",
        c: "In the 22rd century"
      },
      correctAnswer: "b"
    },
	  
	  
	  
    {
      question: "Who is severely wounded in the leg and mistakenly reported killed in action?",
      answers: {
        a: "Dizzy",
        b: "Ace",
        c: "Rico"
      },
      correctAnswer: "c"
    },
	  
	  
	  
	  
    {
      question: " what kind of the tools Rico used to arrives and threatens the Bugs ?",
      answers: {
        a: "Knife",
        b: "firearms",
        c: " a small nuclear bomb"
      },
      correctAnswer: "c"
    }
  ];
		
		
		
		

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    var Q1 = document.querySelector('.Q1'),
		Q2 = document.querySelector('.Q2'),
		Q3 = document.querySelector('.Q3');
    if (currentSlide === 0) {
      previousButton.style.display = "none";
		submitButton.style.display = "none";
		Q1.style.display = "block";
		Q2.style.display = "none";
		Q3.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
		Q1.style.display = "none";
		Q2.style.display = "none";
		Q3.style.display = "block";
    } else if(currentSlide === 1) {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
		Q1.style.display = "none";
		Q2.style.display = "block";
		Q3.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
	
	
})();