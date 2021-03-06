function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

/* 1 - O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.
Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li> */


const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

function daysInCalendar(array){

  for (let i = 0; i < array.length; i += 1){
    let exerciseOne = document.querySelector('#days');
    let exerciseOneItem = document.createElement('li');
    exerciseOneItem.className = 'day';

    if (array[i] === 24 || array[i] === 25 || array[i] === 31) {
      exerciseOneItem.innerText = `${array[i]}`;
      exerciseOneItem.classList.add('holiday');
      exerciseOne.appendChild(exerciseOneItem);
    }
    if (array[i] === 4 || array[i] === 11 || array[i] === 18 || array[i] === 25){
      exerciseOneItem.innerText = `${array[i]}`;
      exerciseOneItem.classList.add('friday');
      exerciseOne.appendChild(exerciseOneItem);
    } 
    exerciseOneItem.innerText = `${array[i]}`;
    exerciseOne.appendChild(exerciseOneItem);
  }
}
daysInCalendar(dezDaysList);

/* 2- Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday".
Adicione este botão como filho/filha da tag <div> com classe "buttons-container".*/

function createButton(string){
  let exerciseTwo = document.querySelector('.buttons-container');
  let exerciseTwoItem = document.createElement('button');
  exerciseTwoItem.id = 'btn-holiday';
  exerciseTwoItem.innerText = string;
  exerciseTwo.appendChild(exerciseTwoItem);
}
createButton('Feriados');

/* 3- Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" . */

function changeButtonColor(){
  let exerciseThree = document.querySelector('#btn-holiday');
  let exerciseThreeHoliday = document.querySelectorAll('.holiday');
  exerciseThree.addEventListener('click', function(){
    for(let i = 0; i < exerciseThreeHoliday.length; i += 1){
      if (exerciseThreeHoliday[i].style.backgroundColor === 'rgba(0, 128, 0, 0.596)'){
        exerciseThreeHoliday[i].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        exerciseThreeHoliday[i].style.backgroundColor = 'rgba(0, 128, 0, 0.596)';
      }
    }
  })
}
changeButtonColor();

/* 4- Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday".
Adicione este botão como filho/filha da tag <div> com classe "buttons-container". */

function fridayButton(string){
  let exerciseFour = document.querySelector('.buttons-container');
  let exerciseFourItem = document.createElement('button');
  exerciseFourItem.id = 'btn-friday';
  exerciseFourItem.innerText = string;
  exerciseFour.appendChild(exerciseFourItem);
}
fridayButton('Sexta-feira');

/* 5- Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias. */

function fridayChange(){
  let exerciseFive = document.querySelector('#btn-friday');
  let exerciseFiveFriday = document.querySelectorAll('.friday');
  exerciseFive.addEventListener('click', function(){
    for (let i = 0; i < exerciseFiveFriday.length; i += 1){
      if (exerciseFiveFriday[i].innerText !== 'SEX-tou'){
        exerciseFiveFriday[i].innerText = 'SEX-tou';
      } else {
        exerciseFiveFriday[i].innerText = parseInt(exerciseFiveFriday[i].nextElementSibling.innerText) -1;
      } 
    }
  })
}
fridayChange();

/* 6- Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
Dica - Propriedade: event.target . */

function zoomEffect(){
  let exerciseSix = document.querySelectorAll('.day');
  for (let i = 0; i < exerciseSix.length; i += 1){
    exerciseSix[i].addEventListener('mouseover', function(){
      exerciseSix[i].style.fontSize = '2em';
    })
    exerciseSix[i].addEventListener('mouseout', function(){
      exerciseSix[i].style.fontSize = '1em';
    })
  }
}
zoomEffect();

/* 7- Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".*/

function addTasks(string){
  let exerciseSeven = document.querySelector('.my-tasks');
  let exerciseSevenItem = document.createElement('span');
  exerciseSevenItem.innerHTML = string;
  exerciseSeven.appendChild(exerciseSevenItem);
}
addTasks('Play basketball');

/* 8- Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".*/

function legendColor(string){
  let exerciseEigth = document.querySelector('.my-tasks');
  let exerciseEigthItem = document.createElement('div');
  exerciseEigthItem.className = 'task';
  exerciseEigthItem.style.backgroundColor = string;
  exerciseEigth.appendChild(exerciseEigthItem);
}
legendColor('red');

/* 9- Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
Ao clicar novamente no elemento a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando de ser uma tarefa selecionada.*/

function taskSelection(){
  let exerciseNine = document.querySelector('.task');
  exerciseNine.addEventListener('click', function(){
    if (exerciseNine.className !== 'task select'){
      exerciseNine.classList.add('select');
    } else {
      exerciseNine.classList.remove('select');
    }
  }) 
}
taskSelection();

/* 10- Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119).*/ 

function daySelect(){
  let exerciseTen = document.querySelector('#days');

      exerciseTen.addEventListener('click', function(event){
        let exerciseTen2 = document.querySelector('.select');
        if (event.target.style.color !== exerciseTen2.style.backgroundColor){
          event.target.style.color = exerciseTen2.style.backgroundColor;
        } else {
          event.target.style.color = 'rgb(119,119,119)';
        }
      }) 
}
daySelect();