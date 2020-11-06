const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");

const instruct = document.getElementById('instructions');

let shuffledQuestions, currentQuestionIndex;

const questionElement = document.getElementById("questions");
const answerButtonsElement = document.getElementById("answer-buttons");

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestions();
});

function startGame() {
  instruct.classList.add('hide');

  startButton.classList.add("hide");

  shuffledQuestions = question.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestions();
}

function setNextQuestions() {
  resetState();

  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {

  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectButton = e.target;
  const correct = selectButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
   

    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const question = [
  {
    question: "Q1. How do you initialize an array in C?",
    answers: [
      { text: " int arr[3] = (1,2,3);", correct: false },
      { text: "int arr(3) = {1,2,3};", correct: false },
      { text: "int arr[3] = {1,2,3};", correct: true },
      { text: "int arr(3) = (1,2,3);", correct: false },
    ],
  },
  {
    question: " Q2. An algorithm that calls itself directly or indirectly is known as :- *",
    answers: [
      { text: "sub alogorithm", correct: false },
      { text: "Recursion", correct: true },
      { text: "Polish notation", correct: false },
      { text: "Traversal algorithm", correct: false },
    ],
  },
  {
    question: " Q3. Which of the following sorting algorithm is of divide-and-conquer type  ?",
    answers: [
      { text: "Bubble sort", correct: false },
      { text: "Insertion sort", correct: false },
      { text: "Quick sort", correct: true },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: " Q5. Which of the following case does not exist in complexity theory ?",
    answers: [
      { text: "best case", correct: false },
      { text: "worst case", correct: false },
      { text: "average case", correct: false },
      { text: "null case", correct: true },
    ],
  },
  {
    question: " Q6. The complexity of linear search algorithm is :-",
    answers: [
      { text: "O(n)", correct: true },
      { text: "O(logn)", correct: false },
      { text: "O(n2)", correct: false },
      { text: "O(nlogn)", correct: false },
    ],
  },
   {
    question: " Q7. The complexity of Binary search algorithm is :-",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(logn)", correct: true },
      { text: "O(n2)", correct: false },
      { text: "none", correct: false },  
    ],
  },

  {
    question: "Q8. The complexity of Bubble sort algorithm is :-",
    answers: [
      { text: "O(n)", correct: false },
      { text: "O(logn)", correct: false },
      { text: "O(n2)", correct: true },
      { text: "O(nlogn)", correct: false },  
    ],
  },

  {
    question: " Q9. In Linked list there are no NULL links in :",
    answers: [
      { text: "Linear Double linked list", correct: false },
      { text: "circular linked list", correct: true },
      { text: "single linked list", correct: false },
      { text: "none", correct: false },
    ],
  },

  {
    question: " Q10. The result of the evaluation of the given prefix expression */b+-dacd, where a=3,b=6,c=1,d=5 is",
    answers: [
      { text: "0", correct: false },
      { text: "5", correct: false },
      { text: "10", correct: true },
      { text: "15", correct: false },
    ],
  },

  
];
