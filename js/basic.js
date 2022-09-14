"use strict";

//#region data
const students = [
  {
    id: 10,
    name: "John Smith",
    marks: [10, 8, 6, 9, 8, 7],
  },
  {
    id: 11,
    name: "John Doe",
    marks: [9, 8, 7, 6, 7],
  },
  {
    id: 12,
    name: "Thomas Anderson",
    marks: [6, 7, 10, 8],
  },
  {
    id: 13,
    name: "Jean-Baptiste Emanuel Zorg",
    marks: [10, 9, 8, 9],
  },
];
//#endregion

//#region main
const avarageMarkOfAStudent = calculateStudentAverageMark(students[1]);
displayAvarageMark(students[1].name, avarageMarkOfAStudent);
const avarageMarkForAllStudents = calculateGroupAverageMark(students);
displayAvarageMark("all students", avarageMarkForAllStudents);
//#endregion

//#region functions
function calculateStudentAverageMark(student) {
  return (
    student.marks.reduce((summOfMarks, mark) => summOfMarks + mark, 0) /
    student.marks.length
  );
}

function calculateGroupAverageMark(students) {
  let marksCount = 0;
  let summOfMarks = 0;
  students.forEach((student) => {
    summOfMarks += student.marks.reduce((acc, mark) => acc + mark);
    marksCount += student.marks.length;
  });
  return summOfMarks / marksCount;
}

function displayAvarageMark(name, mark) {
  alert(`Avarage mark of ${name} is ${mark}`);
}
//#endregion
