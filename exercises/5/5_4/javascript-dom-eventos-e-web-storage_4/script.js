let backgroundColorButton = document.querySelector('.buttons');
let colorButton = document.querySelector('.buttons');
let fontSizerButton = document.querySelector('.buttons');
let spaceLineButton = document.querySelector('.buttons');
let fontTypeButton = document.querySelector('.buttons');

let arrayOfColors = ['red', 'blue', 'yellow', 'black'];

function backgroundColor(array){
  for (let i = 0; i < arrayOfColors.length; i += 1){
    let createButton = document.createElement('button');
    createButton.className = 'background';
    createButton.innerHTML = `Cor de fundo: ${array[i]}`;
    backgroundColorButton.appendChild(createButton);
  }
}
backgroundColor(['red', 'blue', 'yellow', 'black']);

