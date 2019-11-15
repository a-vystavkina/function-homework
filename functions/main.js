'use strict';

//Задание №1
function getSolutions(a, b, c) {
    let D = b**2 - 4*a*c;
    if (D < 0) {
      return {D: D};
    } else if (D === 0) {
        let x1 = -b / 2*a;
      return {roots: [x1],
              D: D};
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / 2*a,
            x2 = (-b - Math.sqrt(D)) / 2*a;
        return { roots: [x1, x2], 
                 D: D};
    }
}


function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    //console.log(result);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if(result.D < 0) {
      console.log(`Уравнение не имеет вещественных корней`);
    } else if (result.D === 0) {
      console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    } else if (result.D > 0) {
      console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
    
}

showSolutionsMessage(1, 2, 3);
showSolutionsMessage(7, 20, -3);
showSolutionsMessage(2, 4, 2);

console.log();
//Задание №2

function getAverageScore(data) {
  let result = {};
  let totalMark = 0;
  let marks = 0;
    for (let subject in data) {
      const averageMark = getAverageArray(data[subject]);
      result[subject] = averageMark;
      totalMark += averageMark;
      let average = totalMark;
      result.average = average/ ++marks;
    }
    return result;
}


function getAverageArray(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum / data.length;
}
console.log(getAverageScore({
  algebra: [2, 4, 5, 2, 3, 4],
  geometry: [2, 4, 5],
  russian: [3, 3, 4, 5],
  physics: [5, 5],
  music: [2, 2, 6],
  english: [4, 4, 3],
  poetry: [5, 3, 4],
  chemistry: [2],
  french: [4, 4]
}));



console.log();
//Задание №3

function getPersonData(secretData) {
  let result = {};
  let i;
  for(let name in secretData) {
    if (name === 'aaa') {
      i = 'firstName';    
    } else if(name === 'bbb'){
      i = 'secondName';
    }
  result[i] = PersonData(secretData);
  }
  return result;

}


function PersonData(secretData) {
  let i;
  for(let name in secretData) {
    if(secretData[name] === 0) {
      i = 'Родриго';
    } else if(secretData[name] === 1){
      i = 'Эмильо'; 
    }
  }
  return i;
}

console.log(getPersonData({
   aaa: 0,
   bbb: 0
}));
console.log(getPersonData({
   aaa: 1,
   bbb: 0
}));
console.log(getPersonData({
   aaa: 0,
   bbb: 1
}));
console.log(getPersonData({
   aaa: 1,
   bbb: 1
}));

