const questions =[
    {
        question:"The ratio of width of our National flag to its length is ?",
        answers:[
            {text:"3:5", correct:false},
            {text:"2:3", correct:true},
            {text:"2:4", correct:false},
            {text:"3:4", correct:false},
        ]
    },

    {
        question:"Rabindranath Tagore's 'Jana Gana Mana' has been adopted as India's National Anthem. How many stanzas of the said song were adopted ?",
        answers:[
            {text:"Only the first stanza", correct:true},
            {text:"The whole song", correct:false},
            {text:"Third and Fourth stanza", correct:false},
            {text:"First and Second stanza", correct:false},
        ]
    },

    {
        question:"'Dandia' is a popular dance of ?",
        answers:[
            {text:"Punjab", correct:false},
            {text:"Gujarat", correct:true},
            {text:"Tamil NaduSahara", correct:false},
            {text:"Maharashtra", correct:false},
        ]
    },

    {
        question:"Which is the smallest continent in the world ?",
        answers:[
            {text:"Asia", correct:false},
            {text:"Australia", correct:true},
            {text:"Arctic", correct:false},
            {text:"Africa", correct:false},
        ]
    },
    {
        question:"The words 'Satyameva Jayate' inscribed below the base plate of the emblem of India are taken from ?",
        answers:[
            {text:"Rigveda", correct:false},
            {text:"Satpath Brahmana", correct:false},
            {text:"Mundak Upanishad", correct:false},
            {text:"Ramayana", correct:true},
        ]
    },
    {
        question:"Which is the smallest continent in the world ?",
        answers:[
            {text:"Asia", correct:false},
            {text:"Australia", correct:true},
            {text:"Arctic", correct:false},
            {text:"Africa", correct:false},
        ]
    },
    {
        question:"When is the World Population Day observed ?",
        answers:[
            {text:"May 31", correct:false},
            {text:"October 4", correct:false},
            {text:"December 10", correct:false},
            {text:"July 11", correct:true},
        ]
    }
];



const questionElement = document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz() {
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
  }

  function showQuestion()
  {
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex + 1;

    questionElement.innerHTML=questionNo + ". "+ currentQuestion.question;
    
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct)
        {
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click" , selectAnswer);
    });
  }

    function resetState()
    {
        nextButton.style.display="none";
        while(answerButtons.firstChild)
        {
            answerButtons.removeChild(answerButtons.firstChild)
        }
    }

    function selectAnswer(e){
        const selectedBtn=e.target;
        const isCorrect=selectedBtn.dataset.correct==="true";
        if(isCorrect)
        {
            selectedBtn.classList.add("correct");
            score++;
        }

        else
        {
            selectedBtn.classList.add("incorrect");
        }

        Array.from(answerButtons.children).forEach(button=>{
            if(button.dataset.correct==="true")
            {
                button.classList.add("correct")
            }
            button.disabled=true;
        });
        nextButton.style.display="block"
    }

    function showScore()
    {
        resetState();
        questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML="play again";
        nextButton.style.display="block";
    }


    function handleNextButton()
    {
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }
        else{
            showScore();
        }
    }


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }

    else
    {
        startQuiz();
    }
})
startQuiz();