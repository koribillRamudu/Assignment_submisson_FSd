// Explain the .filter() function in JavaScript and provide three examples with detailed explanations.

const Person=[
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
    { name: "Diana", age: 28 },
    { name: "Ethan", age: 22 },
    { name: "Fiona", age: 27 },
    { name: "George", age: 33 },
    { name: "Hannah", age: 24 },
    { name: "Ivan", age: 29 },
    { name: "Jasmine", age: 31 }
  ]

  function Young_persons(Person){
    return Person.age>=25 && Person.age<=30
  }
  function Oldest_persons(Person){
      return Person.age>=30
  }
  function PefectAge(Person){
      return Person.age>=18 && Person.age<=25
  }
const filteredPerson=Person.filter(Young_persons);
const filteredOldestpersons=Person.filter(Oldest_persons)
const filteredPerfectAge=Person.filter(PefectAge)
console.log(filteredPerson)
console.log(filteredOldestpersons)
console.log(filteredPerfectAge)


// Explain the .map() function in JavaScript and provide three examples with detailed explanations.

const students = [
    { name: "John", age: 17, grade: "A" },
    { name: "Sarah", age: 19, grade: "B" },
    { name: "Emily", age: 18, grade: "C" },
    { name: "Michael", age: 20, grade: "A" },
    { name: "David", age: 21, grade: "B" },
    { name: "Anna", age: 22, grade: "C" },
    { name: "James", age: 23, grade: "A" },
    { name: "Laura", age: 17, grade: "B" },
    { name: "Sophia", age: 18, grade: "C" },
    { name: "Daniel", age: 19, grade: "A" }
];


function NameOfAllstudents(student){
    return student.name
}

function NameAndAge(students){
    return `${students.name} is ${students.age} year old`
}

function PassedStudents(students){
    const passed=students.grade=="A" || students.grade=="B"
    return {name: students.name,passed: passed}
}
const newarr1=students.map(NameAndAge)
const newarr=students.map(NameOfAllstudents)
const newarr2=students.map(PassedStudents)
console.log(newarr2)
console.log(newarr)
console.log(newarr1)

// Explain the .reduce() function in JavaScript and provide three examples with detailed explanations.

// const Person=[
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Charlie", age: 35 },
//     { name: "Diana", age: 28 },
//     { name: "Ethan", age: 22 },
//     { name: "Fiona", age: 27 },
//     { name: "George", age: 33 },
//     { name: "Hannah", age: 24 },
//     { name: "Ivan", age: 29 },
//     { name: "Jasmine", age: 31 }
//   ]

//   function Young_persons(Person){
//     return Person.age>=25 && Person.age<=30
//   }
//   function Oldest_persons(Person){
//       return Person.age>=30
//   }
//   function PefectAge(Person){
//       return Person.age>=18 && Person.age<=25
//   }
// const filteredPerson=Person.filter(Young_persons);
// const filteredOldestpersons=Person.filter(Oldest_persons)
// const filteredPerfectAge=Person.filter(PefectAge)
// console.log(filteredPerson)
// console.log(filteredOldestpersons)
// console.log(filteredPerfectAge)

// const students = [
//     { name: "John", age: 17, grade: "A" },
//     { name: "Sarah", age: 19, grade: "B" },
//     { name: "Emily", age: 18, grade: "C" },
//     { name: "Michael", age: 20, grade: "A" },
//     { name: "David", age: 21, grade: "B" },
//     { name: "Anna", age: 22, grade: "C" },
//     { name: "James", age: 23, grade: "A" },
//     { name: "Laura", age: 17, grade: "B" },
//     { name: "Sophia", age: 18, grade: "C" },
//     { name: "Daniel", age: 19, grade: "A" }
// ];


// function NameOfAllstudents(student){
//     return student.name
// }

// function NameAndAge(students){
//     return `${students.name} is ${students.age} year old`
// }

// function PassedStudents(students){
//     const passed=students.grade=="A" || students.grade=="B"
//     return {name: students.name,passed: passed}
// }
// const newarr1=students.map(NameAndAge)
// const newarr=students.map(NameOfAllstudents)
// const newarr2=students.map(PassedStudents)
// console.log(newarr2)
// console.log(newarr)
// console.log(newarr1)

const student = [
    { name: "John", age: 17, grade: "A", score: 85 },
    { name: "Sarah", age: 19, grade: "B", score: 78 },
    { name: "Emily", age: 18, grade: "C", score: 65 },
    { name: "Michael", age: 20, grade: "A", score: 92 },
    { name: "David", age: 21, grade: "B", score: 75 },
    { name: "Anna", age: 22, grade: "C", score: 60 },
    { name: "James", age: 23, grade: "A", score: 88 },
    { name: "Laura", age: 17, grade: "B", score: 70 },
    { name: "Sophia", age: 18, grade: "C", score: 68 },
    { name: "Daniel", age: 19, grade: "A", score: 90 }
];


function calculateTotalScore(student) {
    return student.reduce((accumulator, stud) => {
        return accumulator + stud.score;
    }, 0);
}

const totalScore = calculateTotalScore(student);
console.log(`Total Score: ${totalScore}`);

function findHighestScore(stud) {
    return student.reduce((max, stud) => {
        return Math.max(max, stud.score);
    }, stud[0].score);
}

const highestScore = findHighestScore(student);
console.log(`Highest Score: ${highestScore}`);

