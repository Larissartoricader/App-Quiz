const form = document.querySelector('[data-js="form"]');
const checkBoxes = document.querySelectorAll('input[name="category"]');

// Max of 3 Categories

document.addEventListener("DOMContentLoaded", function () {
  checkBoxes.forEach((box) => {
    box.addEventListener("change", function () {
      const checkedBoxes = document.querySelectorAll(
        'input[name="category"]:checked'
      );
      const uncheckedBoxes = document.querySelectorAll(
        'input[name="category"]:not(:checked)'
      );

      if (checkedBoxes.length >= 3) {
        uncheckedBoxes.forEach((box) => {
          box.disabled = true;
        });
      } else {
        checkBoxes.forEach((box) => {
          box.disabled = false;
        });
      }
    });
  });
});

//Submit

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   const formValues = new FormData(event.target);
  //   const values = Object.fromEntries(formValues);
  //   console.log(values);

  const createQuestion = event.target.elements.question.value;
  const createOption1 = event.target.elements.option1.value;
  const createOption2 = event.target.elements.option2.value;
  const createOption3 = event.target.elements.option3.value;
  const createRightAnswer = event.target.elements.rightanswer.value;
  const selectedCategories = [];
  const checkedCategories = event.target
    .querySelectorAll('input[name="category"]:checked')
    .forEach((checkBoxes) => {
      selectedCategories.push(checkBoxes.value);
    });
});
