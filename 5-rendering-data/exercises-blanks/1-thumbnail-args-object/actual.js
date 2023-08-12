'use strict';

const actual = (argsObj = {}) => {
  const divEl = document.createElement('div');
  divEl.className = 'thumbnail-container';

  const imgEl = document.createElement('img');
  imgEl.classList = 'thumbnail to-the-right';
  imgEl.src = argsObj.url;
  imgEl.alt = `the color ${argsObj.color}`;
  divEl.append(imgEl);

  return divEl;
};
