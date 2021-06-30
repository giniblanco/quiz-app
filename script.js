
// Array of objects with our quiz questions & answers
const quizData = [
    {
        question: 'When did The Hellacopters form?',
        a: '1992',
        b: '1994',
        c: '1996',
        d: '1997',
        correct: 'b'
    },
    {
        question: "What instrument did Nicke Andersson use to play in the band Entombed?",
        a: 'Guitar',
        b: 'Guitar and vocals',
        c: 'Bass Guitar',
        d: 'Drums',
        correct: 'd'
    },
    {
        question: 'What served as inspiration for the band name?',
        a: 'A magazine article discovered while on tour.',
        b: "Da Vinci's drawings of a flying machine.",
        c: 'A visit to a museum in Stockholm.',
        d: "Andersson's passion for aircrafts.",
        correct: 'a'
    },
    {
        question: 'The second compilation of non-album tracks was called: Cream of the ....?',
        a: 'Crop',
        b: 'Crap',
        c: 'Creme',
        d: 'Barley',
        correct: 'b'
    },
]

// Container for our current question
let currentQuestion = 0;

// 1) LOAD QUESTION
loadQuestion();

function loadQuestion(){
    
    const currentQuestionData = quizData[currentQuestion];

    document.querySelector("#question").innerHTML = 
    currentQuestionData.question;

    document.querySelector("#a_text").innerHTML =
    currentQuestionData.a;

    document.querySelector("#b_text").innerHTML =
    currentQuestionData.b;

    document.querySelector("#c_text").innerHTML =
    currentQuestionData.c;

    document.querySelector("#d_text").innerHTML =
    currentQuestionData.d;
}

// 2) CLICK SUBMIT, 3) VALIDATE ANSWER, 4) GET SELECTED ANSWER,
// 5) DESELECT ANSWER, 6) SHOW RESULTS PAGE, 7) RELOAD QUIZ
document.querySelector("#submit").addEventListener("click",
() => {
        let answerValid = answerValidator();
        
        if (answerValid == false) {
            loadQuestion();
        } else {
                getSelectedAnswer();
                currentQuestion++;  
                
                if (currentQuestion < quizData.length){
                deselectAnswer();
                loadQuestion();
                } else {
                    document.querySelector(".quiz-header").innerHTML = 
                    `<h1>${average}%</h1>
                    <h2 id="finalMessage">Good job! Get yourself an 
                    orange lemonade! 🍹</h2>`;
                    document.querySelector("#submit").innerHTML =
                    "Play again 😊";
                    document.querySelector("#submit").setAttribute
                    ("onClick", "location.reload()");
                }
        }
})

let point = 0;
let average = 0;

// 4) GET SELECTED ANSWER
function getSelectedAnswer (){
    const currentQuestionData = quizData[currentQuestion];
    const answers = document.querySelectorAll(".answer");
    
        answers.forEach((answers) => {
            if (answers.checked) {                           
                if (answers.value == currentQuestionData.correct){
                    point = point + 1;
                    average = (point / quizData.length) * 100;
                    return average;
                }    
            }           
        });         
}

// 5) DESELECT ANSWER
function deselectAnswer(){
    const answers = document.querySelectorAll(".answer");
    answers.forEach((answers) => {
        answers.checked = false;
    });
}

// 3) VALIDATE ANSWER
function answerValidator(){

    let answers = document.querySelectorAll(".answer");
    let answerValid = false;
    
    let i = 0;
    while (!answerValid && i < answers.length) {
        if (answers[i].checked) {
            answerValid = true;
        }
        i++;
    }

    if (!answerValid && currentQuestion != 4) {
        alert("Must check some option!")
    }
    
    return answerValid;
}