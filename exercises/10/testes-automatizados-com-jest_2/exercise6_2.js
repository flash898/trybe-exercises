const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => {
 return new Promise ((resolve, reject) => {
   setTimeout(() => {
    const animals = Animals.filter((animals) => animals.age === age);
    if(animals.length!==0) return resolve(animals);
    return reject('Nenhum animal encontrado!');
   }, 300);   
  });
};

const getAnimal = async (age) => {
  return await findAnimalByAge(age).then(r => r)
};

module.exports = {
  Animals,
  findAnimalByAge,
  getAnimal
}