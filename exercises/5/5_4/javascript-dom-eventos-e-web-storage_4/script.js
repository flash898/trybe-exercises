let getP = document.querySelector('.main');
let getButtons = document.querySelectorAll('.background');
let getDivButton = document.querySelector('.buttons');

let arrayOfColors = ['red', 'blue', 'yellow', 'white'];
let arrayOfSizes = ['2px', '3px', '4px', '5px'];
let arrayOfFonts = ['Arial', 'Roboto', 'sans-serif', 'serif']

function backgroundColor(array){
  let blockBgC = document.createElement('div');
  blockBgC.innerText = 'Selecione uma cor de fundo: ';
  blockBgC.style.border = '1px solid black';
  getDivButton.appendChild(blockBgC);
  for (let i = 0; i < arrayOfColors.length; i += 1){
    let createButton = document.createElement('button');
    createButton.className = 'background';
    createButton.style.backgroundColor = array[i];
    createButton.innerHTML = `Cor de fundo: ${array[i]}`;
    blockBgC.appendChild(createButton);
  }
}
backgroundColor(arrayOfColors);

let backgroundColorButton = document.querySelectorAll('.background');
for (let i = 0; i < backgroundColorButton.length; i += 1) {
  backgroundColorButton[i].addEventListener('click', () => {
    if (getP.style.backgroundColor !== backgroundColorButton[i].style.backgroundColor);
    getP.style.backgroundColor = backgroundColorButton[i].style.backgroundColor;
  });
}


function color(array){
  let blockColor = document.createElement('div');
  blockColor.innerText = 'Selecione uma cor de letra: ';
  blockColor.style.border = '1px solid black';
  getDivButton.appendChild(blockColor);
  for (let i = 0; i < arrayOfColors.length; i += 1){
    let createButton = document.createElement('button');
    createButton.className = 'letter-color';
    createButton.style.color = array[i]
    createButton.innerHTML = `Cor da letra: ${array[i]}`;
    blockColor.appendChild(createButton);
  }
}
color(arrayOfColors);

let colorButton = document.querySelectorAll('.letter-color');
for (let index = 0; index < colorButton.length; index += 1) {
  colorButton[index].addEventListener('click', () => {
    getP.style.color = colorButton[index].style.color;
  });
}

function fontSizer(array){
  let blockFS = document.createElement('div');
  blockFS.innerText = 'Selecione o tamanho da fonte: ';
  blockFS.style.border = '1px solid black';
  getDivButton.appendChild(blockFS);
  for (let i = 0; i < arrayOfColors.length; i += 1){
    let createButton = document.createElement('button');
    createButton.className = 'fontsizer';
    createButton.innerHTML = `Tamanho da fonte: ${array[i]}`;
    blockFS.appendChild(createButton);
  }
}
fontSizer(arrayOfSizes);

function spaceLine(array){
  let blockSL = document.createElement('div');
  blockSL.innerText = 'Selecione o espaçamento: ';
  blockSL.style.border = '1px solid black';
  getDivButton.appendChild(blockSL);
  for (let i = 0; i < arrayOfColors.length; i += 1){
    let createButton = document.createElement('button');
    createButton.className = 'spaceliner';
    createButton.innerHTML = `Espaçamento: ${array[i]}`;
    blockSL.appendChild(createButton);
  }
}
spaceLine(arrayOfSizes);

function fontType(array){
  let blockFT = document.createElement('div');
  blockFT.innerText = 'Selecione o tipo de fonte: ';
  blockFT.style.border = '1px solid black';
  getDivButton.appendChild(blockFT);
  for (let i = 0; i < arrayOfColors.length; i += 1){
    let createButton = document.createElement('button');
    createButton.className = 'font-typer';
    createButton.innerHTML = `Tipo da fonte: ${array[i]}`;
    blockFT.appendChild(createButton);
  }
}
fontType(arrayOfFonts);

// let backgroundColorButton = document.querySelectorAll('.buttons');
// let colorButton = document.querySelectorAll('.buttons');
// let fontSizerButton = document.querySelector('.buttons');
// let spaceLineButton = document.querySelector('.buttons');
// let fontTypeButton = document.querySelector('.buttons');
// let createSeparation = document.querySelector('.buttons');