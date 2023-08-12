'use strict';

const actual = ({ question, answers, correct, selected }) => {
  const formEl = document.createElement('form');
  const pEl = document.createElement('p');
  pEl.innerText = question;
  formEl.appendChild(pEl);

  answers.forEach((answer, index) => {
    const inputEl = document.createElement('input');
    inputEl.type = 'radio';
    inputEl.name = 'answers';
    if (index === selected) {
        inputEl.checked = true;
    }

    const textEl = document.createElement('text');
    textEl.innerText = answer;
    if (inputEl.checked) {
        if (index === correct) {
            textEl.className = 'correct';
            textEl.innerText = answer + ' √';
        } else {
            textEl.className = 'incorrect';
            textEl.innerText = answer + ' ✖';
        }
    }

    const brEl = document.createElement('br');
    formEl.append(inputEl, textEl, brEl);
});

return formEl;

}

  