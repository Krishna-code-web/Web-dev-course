document.addEventListener("DOMContentLoaded", function(){
    let questions = [
        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "Who wrote 'Hamlet'?",
            choices: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
            answer: "William Shakespeare"
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    let startButton = document.getElementById('start-btn');
    let choiceList = document.getElementById('choices-list');
    let questionText = document.getElementById('question-text');
    let questionContainer = document.getElementById('question-container');
    let nextButton = document.getElementById('next-btn');
    let resultContainer = document.getElementById('result-container');
    let scoreDisplay = document.getElementById('score');
    let restartButton = document.getElementById('restart-btn');

    startButton.addEventListener('click', startQuiz);
    nextButton.addEventListener('click', nextQuestion);
    restartButton.addEventListener('click', restartQuiz);

    function restartQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        resultContainer.classList.add('hidden');
        startQuiz();
    }

    function nextQuestion(){
        if(currentQuestionIndex < questions.length-1){
            currentQuestionIndex++;
            startQuiz();
        } else {
            questionContainer.classList.add('hidden');
            resultContainer.classList.remove('hidden');
            scoreDisplay.innerText = `${score} out of ${questions.length}`;
        }
    }

    function startQuiz(){
        startButton.classList.add('hidden');

        questionContainer.classList.remove('hidden');
        questionText.innerText = questions[currentQuestionIndex].question;
        choiceList.innerHTML = "";
        questions[currentQuestionIndex].choices.forEach((choice) => {
            let element = document.createElement('li');
            element.textContent = choice;
            element.addEventListener('click', () => checkAnswer(choice));
            choiceList.appendChild(element);
        })
    }

    function checkAnswer(choice){
        if(choice === questions[currentQuestionIndex].answer){
            score++;
        }
        nextButton.classList.remove('hidden');
    }
})