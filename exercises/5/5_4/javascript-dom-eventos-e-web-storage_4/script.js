let getP = document.querySelector('.main');
let getButtons = document.querySelectorAll('.background');
let getDivButton = document.querySelector('.buttons');

let arrayOfColors = ['red', 'blue', 'yellow', 'white'];
let arrayOfSizes = ['1.2em', '1.3em', '1.4em', '1.5em'];
let arrayOfFonts = ["Times New Roman, Times, serif", "Courier New, Courier, monospace", "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"];

function backgroundColor(array){
  let blockBgC = document.createElement('div');
  blockBgC.innerText = 'Selecione uma cor de fundo: ';
  blockBgC.style.border = '1px solid black';
  getDivButton.appendChild(blockBgC);
  for (let i = 0; i < arrayOfColors.length; i += 1){
    let createButton = document.createElement('button');
    createButton.className = 'background';
    createButton.style.border = `1px solid ${array[i]}`;
    createButton.innerHTML = array[i];
    blockBgC.appendChild(createButton);
  }
}
backgroundColor(arrayOfColors);

let backgroundColorButton = document.querySelectorAll('.background');
for (let i = 0; i < backgroundColorButton.length; i += 1) {
  backgroundColorButton[i].addEventListener('click', (event) => {
    getP.style.backgroundColor = event.target.innerHTML;
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
    createButton.style.border = `1px solid ${array[i]}`;
    createButton.innerHTML = array[i];
    blockColor.appendChild(createButton);
  }
}
color(arrayOfColors);

let colorButton = document.querySelectorAll('.letter-color');
for (let index = 0; index < colorButton.length; index += 1) {
  colorButton[index].addEventListener('click', (event) => {
    getP.style.color = event.target.innerText;
  });
}

function fontSizer(array){
  let blockFS = document.createElement('div');
  blockFS.innerText = 'Selecione o tamanho da fonte: ';
  blockFS.style.border = '1px solid black';
  getDivButton.appendChild(blockFS);
  for (let i = 0; i < arrayOfSizes.length; i += 1){
    let createButton = document.createElement('button');
    createButton.className = 'fontsizer';
    createButton.innerHTML = array[i];
    blockFS.appendChild(createButton);
  }
}
fontSizer(arrayOfSizes);

let fontSizerButton = document.querySelectorAll('.fontsizer');
for (let index = 0; index < fontSizerButton.length; index += 1) {
  fontSizerButton[index].addEventListener('click', (event) => {
    getP.style.fontSize = event.target.innerText;
  });
}

function spaceLine(array){
  let blockSL = document.createElement('div');
  blockSL.innerText = 'Selecione o espaçamento: ';
  blockSL.style.border = '1px solid black';
  getDivButton.appendChild(blockSL);
  for (let i = 0; i < arrayOfSizes.length; i += 1){
    let createButton = document.createElement('button');
    createButton.className = 'spaceliner';
    createButton.innerHTML = array[i];
    blockSL.appendChild(createButton);
  }
}
spaceLine(arrayOfSizes);

let spaceLineButton = document.querySelectorAll('.spaceliner');
for (let index = 0; index < spaceLineButton.length; index += 1) {
  spaceLineButton[index].addEventListener('click', (event) => {
    getP.style.lineHeight = event.target.innerHTML;
  });
}

function fontType(array){
  let blockFT = document.createElement('div');
  blockFT.innerText = 'Selecione o tipo de fonte: ';
  blockFT.style.border = '1px solid black';
  getDivButton.appendChild(blockFT);
  for (let i = 0; i < arrayOfFonts.length; i += 1){
    let createButton = document.createElement('button');
    createButton.className = 'font-typer';
    createButton.innerHTML = array[i];
    blockFT.appendChild(createButton);
  }
}
fontType(arrayOfFonts);

let fontTypeButton = document.querySelectorAll('.font-typer');
for (let index = 0; index < fontTypeButton.length; index += 1) {
  fontTypeButton[index].addEventListener('click', (event) => {
    getP.style.fontFamily = event.target.innerHTML;
  });
}

const savedPreferences = document.querySelector('body');
console.log(savedPreferences);
let getSaveBtn = document.querySelector('.salvar');
getSaveBtn.addEventListener('click', () => {
  localStorage.setItem('preferences', savedPreferences.innerHTML);
});
  

function loadPreferences() {
  savedPreferences.innerHTML = localStorage.getItem('preferences');
}

if (localStorage.getItem('preferences')) {
  loadPreferences();
}
