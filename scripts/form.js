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
  const formData = new FormData(event.target);

  const categories = [];
  formData.getAll("category").forEach((value) => {
    categories.push(value);
  });

  formData.delete("category");

  const values = Object.fromEntries(formData);
  values.categories = categories;

  const storedQuestions =
    JSON.parse(localStorage.getItem("questionsList")) || [];

  storedQuestions.push(values);

  localStorage.setItem("questionsList", JSON.stringify(storedQuestions));

  window.location.href = "index.html";
});
