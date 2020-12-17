const docEl = document.documentElement;
let size = docEl.clientWidth / (750 / 40);
docEl.style.fontSize = size >= 25 ? 25 : size + 'px';
