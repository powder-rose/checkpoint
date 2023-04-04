
let candidates = [
  {
    name: 'Василий Петров',
    age: 60,
    score: 98,
    serviceRecord: 36,
  },
  {
    name: 'Екатерина Фёдорова',
    age: 35,
    score: 90,
    serviceRecord: 7,
  },
  {
    name: 'Иван Иванов',
    age: 29,
    score: 67,
    serviceRecord: 2,
  },
  {
    name: 'Зинаида Абрамова',
    age: 45,
    score: 78,
    serviceRecord: 14,
  },
  {
    name: 'Виктор Олегов',
    age: 54,
    score: 85,
    serviceRecord: 21,
  },
];

const filterByAge = (arr) => {
  return arr.age < 50;
};


const filterByScore = (arr) => {
  return arr.score > 75;

};

const filterByServiceRecord = (arr) => {
  return arr.serviceRecord > 5;
};

const sortByScore = (arr) => {
return arr.sort(arr.score)
};
console.log(sortByScore(candidates))
const getMeanAge = (arr) => {

};

const getMeanAgeReduce = (arr) => {
    let result = arr.reduce((meanAge, el) => (meanAge + el.age), 0) / arr.length
    return result
};

const getNamesOnly = (arr) => {
  return arr.name
}

module.exports = {
filterByAge,
filterByScore,
filterByServiceRecord,
sortByScore,
getMeanAge,
getMeanAgeReduce,
getNamesOnly,
};
