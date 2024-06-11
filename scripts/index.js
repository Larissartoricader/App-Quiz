import { questions } from "../scripts/questions.js";

console.clear();

const questionsContainer = document.querySelector(
  '[data-js="all-questions-container"]'
);

// New Card HTML-Creation
function createNewQuestionCard(questionData) {
  const newArticle = document.createElement("article");
  newArticle.classList.add("question-container");

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
  newAnswer.dataset.js = "answer-txt";
  if (questionData.rightanswer === "option1") {
    newAnswer.textContent = `The Right Answer: ${questionData.option1}`;
  } else if (questionData.rightanswer === "option2") {
    newAnswer.textContent = `The Right Answer: ${questionData.option2}`;
  } else if (questionData.rightanswer === "option3") {
    newAnswer.textContent = `The Right Answer: ${questionData.option3}`;
  }
  questionBox.appendChild(newAnswer);

  const newButton = document.createElement("button");
  newButton.dataset.js = "answer-button";
  newButton.classList.add("answer-button");
  newButton.textContent = "Reveal the Answer";
  questionBox.appendChild(newButton);

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

  // Reveal the Answer
  newButton.addEventListener("click", () => {
    newAnswer.classList.toggle("answer-txt-visible");
    newAnswer.classList.toggle("answer-txt-unvisible");
  });

  return newArticle;
}

// Add new Question-Card
questions.forEach((questionData) => {
  const card = createNewQuestionCard(questionData);
  questionsContainer.appendChild(card);
});
