refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};

let timer = null;

refs.stopBtn.setAttribute('disabled', true);

refs.startBtn.addEventListener('click', () => {
  timer = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.stopBtn.removeAttribute('disabled');
  refs.startBtn.setAttribute('disabled', true);
});

refs.stopBtn.addEventListener('click', () => {
  clearInterval(timer);

  refs.startBtn.removeAttribute('disabled');
  refs.stopBtn.setAttribute('disabled', true);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
