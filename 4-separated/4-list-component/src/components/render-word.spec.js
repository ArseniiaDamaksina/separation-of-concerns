import { renderWord } from './render-word.js';

// .. many helpful tests ..
describe('renderWord', () => {
  it('should render a text element with the correct text', () => {
    const word = 'Hello';
    const textElement = renderWord(word);
    expect(textElement.innerText).toBe(word);
  });

  it('should render a text element with the correct class name', () => {
    const textElement = renderWord();
    expect(textElement.className).toBe('your-word-class-name'); // Replace with your actual class name
  });

  it('should be a DOM element with nodeName "text"', () => {
    const textElement = renderWord('Test');
    expect(textElement).toBeInstanceOf(HTMLElement);
    expect(textElement.nodeName).toBe('TEXT');
  });
});