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
  return (
    students.reduce(
      (avarageMarkOfAStudent, student) =>
        avarageMarkOfAStudent + calculateStudentAverageMark(student),
      0
    ) / students.length
  );
}

function displayAvarageMark(name, mark) {
  alert(`Avarage mark of ${name} is ${mark}`);
}
//#endregion
