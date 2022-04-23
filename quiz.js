//creates a quiz
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const quizQuestions = [
    {
      question: "Josiah Koh is currently a member of:",
      answers: {
        a: "ASCILITE",
        b: "CREATE",
        c: "FLANZ",
        d: "All of the above"
      },
      correctAnswer: "d"
    },
    {
      question: "Josiah works closely with:",
      answers: {
        a: "Undergraduate Students",
        b: "Honours students",
        c: "Higher Degree Research Students",
        d: "All of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "Josiah’s web design and development skills include:",
      answers: {
        a: "Contextual inquiry",
        b: "Participant observation",
        c: "User interface design",
        d: "Prototype sorting"
      },
      correctAnswer: "c"
    },
    {
      question: "Josiah is super passionate about:",
      answers: {
        a: "People",
        b: "Innovation",
        c: "Human-centred design",
        d: "All of the above and more!"
      },
      correctAnswer: "d"
    }
  ];




function buildQuiz() {
// variable to store the HTML output
const output = [];
for(i=0; i<quizQuestions.length; i++){
    // variable to store the list of possible answers
    const answers = []; 
    // for each available answer to this question add a html radio button
for(letter in quizQuestions[i].answers){
    answers.push(
        '<label>'
        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
        + letter + ': '
        + quizQuestions[i].answers[letter]
        + '</label>'
        );
// add this question and its answers to the output
output.push(
    '<div class="question">' + quizQuestions[i].question + '</div>'
    + '<div class="answers">' + answers.join('') + '</div>'
    
}
}
function showResults() {
}