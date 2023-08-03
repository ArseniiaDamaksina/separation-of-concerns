'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <p></p>
  <section></section>
  <h1></h1>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  replace the <p>
const pEl = divEl.querySelector('p');
const navEl = document.createElement('nav');
divEl.replaceChild(navEl, pEl);

//  insert something before the <section>
const h2El = document.createElement('h2');
const sectionEl = divEl.querySelector('section');
divEl.insertBefore(h2El, sectionEl);

//  remove the <h1>
const h1El = divEl.querySelector('h1');
divEl.removeChild(h1El);

//  append something to the end
divEl.append(pEl);

// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

console.assert(divEl.childElementCount === 4, 'Test: .childElementCount');

console.assert(divEl.children[0].nodeName === 'NAV', 'Test: 1st child');
console.assert(divEl.children[1].nodeName === 'H2', 'Test: 2nd child');
console.assert(divEl.children[2].nodeName === 'SECTION', 'Test: 3rd child');
console.assert(divEl.children[3].nodeName === 'P', 'Test: 4th child');
