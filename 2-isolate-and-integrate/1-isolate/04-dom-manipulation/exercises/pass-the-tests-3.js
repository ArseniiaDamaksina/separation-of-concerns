'use strict';

const divEl = document.createElement('ul');
divEl.innerHTML = `
  <table>
    <tbody>
      <tr></tr>
      <tr></tr>
    </tbody>
  </table>
`;
console.log(divEl.nodeName + ' (before)', divEl.cloneNode(true));

// --- write some code ---
//  you want to create a 2x2 table with a, b, c, d in the squares
const tbodyEl = divEl.querySelector('tbody');
const rows = tbodyEl.querySelectorAll('tr');

const td11 = document.createElement('td');
td11.innerText = 'a';

const td12 = document.createElement('td');
td12.innerText = 'b';

const td21 = document.createElement('td');
td21.innerText = 'c';

const td22 = document.createElement('td');
td22.innerText = 'd';

rows[0].appendChild(td11);
rows[0].appendChild(td12);
rows[1].appendChild(td21);
rows[1].appendChild(td22);

// --- --- --- --- --- ---

console.log(divEl.nodeName + ' (after)', divEl.cloneNode(true));

const expectedInnerHTMLs = ['a', 'b', 'c', 'd'];
for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 2; j++) {
    const tbodyEL = divEl.children[0].children[0];
    const trEl = tbodyEL.children[i];
    const tdEl = trEl.children[j];
    const actual = tdEl.innerHTML;
    const expected = expectedInnerHTMLs.shift();
    console.assert(actual === expected, `expected "${expected}"`);
  }
}
