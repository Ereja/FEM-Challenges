const questions = document.querySelectorAll(
  ".faq-accordion-container__info__details"
);

questions.forEach(question => {
  const clickedQuestion = question.querySelector(
    ".faq-accordion-container__info__details__question"
  );

  clickedQuestion.addEventListener("click", () => {
    questions.forEach(element => {
      if (element !== question) {
        element.classList.remove("show-answer");
      }
    });
    question.classList.toggle("show-answer");
  });
});
