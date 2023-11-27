const blockRandom = document.querySelector('.block');
// console.log(blockRandom)

setInterval(() => {
  const randomColorBlock = Math.floor(Math.random()*16777215).toString(16);
  blockRandom.style.backgroundColor = "#" + randomColorBlock;
}, 500);

let positionX = 0;
let positionY = 0;

setInterval(() =>{
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    positionX = Math.floor(Math.random()*(windowWidth - blockRandom.clientWidth));
    positionY = Math.floor(Math.random()*(windowHeight - blockRandom.clientHeight));

    blockRandom.style.left = positionX + 'px';
    blockRandom.style.top = positionY + 'px';
}, 1000)