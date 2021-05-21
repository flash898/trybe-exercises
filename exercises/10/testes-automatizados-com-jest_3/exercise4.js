const transformToUppercase = (str) => {
  return str.toUpperCase();
};


const getTheFirstLetter = (str) => {
  return str.substring(0,1);
};


const concatStrings = (str1, str2) => {
  return str1.concat(str2);
};

module.exports = { transformToUppercase, getTheFirstLetter, concatStrings };
// 4- Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.