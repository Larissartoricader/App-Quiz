import { questions } from "./scripts/questions.js";
console.clear();

// Import Question and Append in Index

const questionsContainer = document.querySelector(
  '[data-js="all-questions-container"]'
);
console.log(questionsContainer);

function createNewQuestionCard(questionData) {
  const newArticle = document.createElement("article");
  newArticle.classList.add("question-container");

  const questionBox = document.createElement("div");
  questionBox.classList.add("question-box");

  const questionTitle = document.createElement("h2");
  questionTitle.classList.add("question-txt");
  questionTitle.textContent = questionData.question;
  questionBox.appendChild(questionTitle);

  const choiceContainer = document.createElement("div");
  choiceContainer.classList.add("choice-container");
  questionBox.appendChild(choiceContainer);

  const newChoice1 = document.createElement("p");
  newChoice1.classList.add("choice");
  newChoice1.textContent = `1. ${questionData.option1}`;
  choiceContainer.appendChild(newChoice1);

  const newChoice2 = document.createElement("p");
  newChoice2.classList.add("choice");
  newChoice2.textContent = `2. ${questionData.option2}`;
  choiceContainer.appendChild(newChoice2);

  const newChoice3 = document.createElement("p");
  newChoice3.classList.add("choice");
  newChoice3.textContent = `3. ${questionData.option3}`;
  choiceContainer.appendChild(newChoice3);

  const newAnswer = document.createElement("p");
  newAnswer.classList.add("answer-txt-unvisible");
  answerText.dataset.js = "answer-txt";
  if (questionData.rightanswer === "option1") {
    newAnswer.textContent = `The Rigth Answer. ${questionData.option1}`;
  }
  if (questionData.rightanswer === "option2") {
    newAnswer.textContent = `The Rigth Answer. ${questionData.option2}`;
  }
  if (questionData.rightanswer === "option3") {
    newAnswer.textContent = `The Rigth Answer. ${questionData.option3}`;
  }
  questionBox.appendChild(newAnswer);

  const newButton = document.createElement("button");
  newButton.dataset.js = "answer-button";
  questionBox.append(newButton);

  const categoryContainer = document.createElement("div");
  categoryContainer.classList.add("category-container");
  newArticle.append(categoryContainer);

  const newCategory = document.createElement("p");
  newCategory.classList.add("category-txt");
  questionData.categories((category) => {
    newCategory.textContent = `#${category}`;
  });
  categoryContainer.append(newCategory);

  questions.map((questionData) => {
    const card = createNewQuestionCard(questionData);
    questionsContainer.append(card);
  });
}

// Bookmarks

const BookmarkIcon = document.querySelector('[data-js="bookmark"]');

BookmarkIcon.addEventListener("click", () => {
  const EmptyBookmarkIcon = BookmarkIcon.getAttribute("src");
  if (EmptyBookmarkIcon === `../assets/bookmark-white.png`) {
    const newBookmarkIcon = `../assets/bookmark-black.png`;
    BookmarkIcon.setAttribute("src", newBookmarkIcon);
  } else {
    const newBookmarkIcon = `../assets/bookmark-white.png`;
    BookmarkIcon.setAttribute("src", newBookmarkIcon);
  }
});

// Reveal Right Answer

const Answer = document.querySelector('[data-js="answer-txt"]');
const AnswerButton = document.querySelector('[data-js="answer-button"]');

AnswerButton.addEventListener("click", () => {
  Answer.classList.toggle("answer-txt-visible");
  Answer.classList.toggle("answer-txt-unvisible");
});
