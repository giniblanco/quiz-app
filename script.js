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

// get the elements and put them into variables

let currentQuestion = 0;

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

document.querySelector("#submit").addEventListener("click",
() => {

    getSelectedAnswer();
    currentQuestion++;

    if (currentQuestion < quizData.length){
        loadQuestion();
    } else {
        document.querySelector(".quiz-header").innerHTML = 
        `<h1>${average}%</h1>
        <h2 id="finalMessage">Good job! Get yourself an 
        orange lemonade! 🍹</h2>`;
        document.querySelector("#submit").remove();
    }
}
)

let point = 0;
let average = 0;

function getSelectedAnswer (){
    const currentQuestionData = quizData[currentQuestion];
    const answers = document.querySelectorAll(".answer");
    
        answers.forEach(answers => {
        
        if (answers.checked) {
            console.log(answers.checked);
            console.log(answers.value);
            console.log(currentQuestionData.correct);
            
            if (answers.value == currentQuestionData.correct){
                console.log("correct!");
                point = point + 1;
                console.log(point);
                average = (point / quizData.length) * 100;
                console.log(average); 
                return average;
            }    
        }
    })
}









