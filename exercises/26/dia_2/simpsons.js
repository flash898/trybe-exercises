const fs = require('fs').promises;
const readline = require('readline-sync');

async function readData() {
  try {
    const data = await fs.readFile('simpsons.json', 'utf8');
    const dataArr = JSON.parse(data);
    console.log(dataArr.map((element) => `${element.id} - ${element.name}`));
  } catch (e){
    console.log(`Não foi possivel ler o arquivo`, e.message);
  }
}

// readData();

async function findById() {
  const idCharacter = readline.questionInt('Digite o id do personagem: ');
  try {
    const data = await fs.readFile('simpsons.json', 'utf8');
    const findId = JSON.parse(data)
      .find((value) => value.id == Number(idCharacter));
    const findCharacter = `${findId.id} - ${findId.name}`
    console.log(findCharacter);
  } catch (error) {
    console.error(`id não encontrado`, error.message);
  }
}

// findById();

async function removeCharacter() {
  try {
    const data = await fs.readFile('simpsons.json', 'utf8');
    const dataArr = JSON.parse(data).filter((value) => {
      if(value.id == 10 || value.id == 6) return false;
      return true;
    });
    const stringDataArr = JSON.stringify(dataArr);
    await fs.writeFile('simpsons.json', stringDataArr);
    
    console.log(dataArr.map((element) => `${element.id} - ${element.name}`));
  } catch (error) {
    console.error(error.message);
  }
}

// removeCharacter();

async function createNewFile() {
  try {
    const data = await fs.readFile('simpsons.json', 'utf8');
    const dataArr = JSON.parse(data).filter((value) => {
      if(value.id > 4) return false;
      return true;
    });
    const stringDataArr = JSON.stringify(dataArr);
    await fs.writeFile('simpsonFamily.json', stringDataArr);

  } catch (e){
    console.log(`Não foi possivel ler o arquivo`, e.message);
  }
}

// createNewFile();

async function addNewCharacter() {
  try {
    const data = await fs.readFile('simpsonFamily.json', 'utf8');
    const dataArr = JSON.parse(data);
    dataArr.push({"id":"8","name":"Nelson Muntz"})
    const stringDataArr = JSON.stringify(dataArr);
    await fs.writeFile('simpsonFamily.json', stringDataArr);

  } catch (e){
    console.log(`Não foi possivel ler o arquivo`, e.message);
  }
}

// addNewCharacter()

async function replaceCharacter() {
  try {
    const data = await fs.readFile('simpsonFamily.json', 'utf8');
    const dataArr = JSON.parse(data);
   
    const stringDataArr = JSON.stringify(dataArr).replace('Nelson Muntz', 'Maggie Simpson');
    await fs.writeFile('simpsonFamily.json', stringDataArr);

  } catch (e){
    console.log(`Não foi possivel ler o arquivo`, e.message);
  }
}

replaceCharacter();