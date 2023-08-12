'use strict';

const actual = (level, text, styling) => {
  const headerEl = document.createElement(`h${level}`);
  headerEl.innerText = text;
  headerEl.className = styling;

  return headerEl;
};
