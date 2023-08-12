'use strict';

const actual = (height, width, radius) => {
  const canvasEl = document.createElement('canvas');
  const ctx = canvasEl.getContext('2d');

  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      const greenVal = Math.floor(255 - (255 / height) * i);
      const blueVal = Math.floor(255 - (255 / width) * j);
      ctx.strokeStyle = `rgb(0, ${greenVal}, ${blueVal})`;
      ctx.beginPath();
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, radius, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }

  return canvasEl;
};
