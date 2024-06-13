import { questions } from "../scripts/questions.js";

console.clear();
const questionsContainer = document.querySelector(
  '[data-js="all-questions-container"]'
);

console.log(questionsContainer);

// New Card HTML-Creation
export function createNewQuestionCard(questionData) {
  const newArticle = document.createElement("article");
  newArticle.classList.add("question-container");
  newArticle.classList.add("question-background");
  newArticle.dataset.js = questionData.id;

  const bookmarkImg = document.createElement("img");
  bookmarkImg.classList.add("bookmark");
  bookmarkImg.src = "public/assets/icons/bookmark-white.png";
  bookmarkImg.dataset.js = "bookmark";
  newArticle.appendChild(bookmarkImg);

  const questionBox = document.createElement("div");
  questionBox.classList.add("question-box");
  newArticle.appendChild(questionBox);

  const questionTitle = document.createElement("h2");
  questionTitle.classList.add("question-txt");
  questionTitle.textContent = questionData.question;
  questionBox.appendChild(questionTitle);

  const choiceContainer = document.createElement("div");
  choiceContainer.classList.add("choice-container");
  questionBox.appendChild(choiceContainer);

  const newChoice1 = document.createElement("button");
  newChoice1.classList.add("choice");
  newChoice1.dataset.js = "option1";
  newChoice1.textContent = questionData.option1;
  choiceContainer.appendChild(newChoice1);

  const newChoice2 = document.createElement("button");
  newChoice2.classList.add("choice");
  newChoice2.dataset.js = "option2";
  newChoice2.textContent = questionData.option2;
  choiceContainer.appendChild(newChoice2);

  const newChoice3 = document.createElement("button");
  newChoice3.classList.add("choice");
  newChoice3.dataset.js = "option3";
  newChoice3.textContent = questionData.option3;
  choiceContainer.appendChild(newChoice3);

  const categoryContainer = document.createElement("div");
  categoryContainer.classList.add("category-container");
  newArticle.appendChild(categoryContainer);

  questionData.categories.forEach((category) => {
    const newCategory = document.createElement("p");
    newCategory.classList.add("category-txt");
    newCategory.textContent = `#${category}`;
    categoryContainer.appendChild(newCategory);
  });

  // Bookmark Icon
  bookmarkImg.addEventListener("click", () => {
    const currentSrc = bookmarkImg.getAttribute("src");
    bookmarkImg.setAttribute(
      "src",
      currentSrc === "public/assets/icons/bookmark-white.png"
        ? "public/assets/icons/bookmark-BLACK.png"
        : "public/assets/icons/bookmark-white.png"
    );
  });

  return newArticle;
}

// Add new Question-Card
questions.forEach((questionData) => {
  const card = createNewQuestionCard(questionData);
  questionsContainer.appendChild(card);
});

//New Card from Submit (form.js)

document.addEventListener("DOMContentLoaded", function () {
  const questionsContainer = document.querySelector(
    '[data-js="all-questions-container"]'
  );

  const newQuestionData = localStorage.getItem("newQuestionData");
  if (newQuestionData) {
    const questionData = JSON.parse(newQuestionData);
    const newCard = createNewQuestionCard(questionData);
    questionsContainer.appendChild(newCard);

    localStorage.removeItem("newQuestionData");
  }
});

// Getting Right Answer and checking it
function checkRightAnswer(event, choice) {
  const questionContainer = event.target.closest(".question-container");

  const questionId = parseInt(
    event.target.closest(".question-container").dataset.js
  );
  const questionData = questions.find((question) => question.id === questionId);

  let rightAnswerText;
  if (questionData.rightanswer === "option1") {
    rightAnswerText = questionData.option1;
  } else if (questionData.rightanswer === "option2") {
    rightAnswerText = questionData.option2;
  } else if (questionData.rightanswer === "option3") {
    rightAnswerText = questionData.option3;
  }

  if (choice === rightAnswerText) {
    questionContainer.classList.add("question-background-right");
    questionContainer.classList.remove("question-background-wrong");
  } else {
    questionContainer.classList.add("question-background-wrong");
    questionContainer.classList.remove("question-background-right");
  }
}

// Verifying the Answer
const buttons1 = document.querySelectorAll('[data-js="option1"]');
const buttons2 = document.querySelectorAll('[data-js="option2"]');
const buttons3 = document.querySelectorAll('[data-js="option3"]');

buttons1.forEach((button1) => {
  button1.addEventListener("click", (event) => {
    checkRightAnswer(event, button1.textContent);
  });
});

buttons2.forEach((button2) => {
  button2.addEventListener("click", (event) => {
    checkRightAnswer(event, button2.textContent);
  });
});

buttons3.forEach((button3) => {
  button3.addEventListener("click", (event) => {
    checkRightAnswer(event, button3.textContent);
  });
});
