const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
 return new Promise ((resolve, reject) => {
    const animal = Animals.find((animal) => animal.name === name);
    if(animal) return resolve(animal);
    return reject('Nenhum animal com esse nome!');   
  });
};

const getAnimal = (name) => {
  return findAnimalByName(name).then(r => r)
};

module.exports = {
  Animals,
  findAnimalByName,
  getAnimal
}