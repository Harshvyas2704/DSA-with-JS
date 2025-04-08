const students = ["Jordan", "Eric", "Mike", "Walter"];

const findStudent = (allStudent, studentName) => {
  for (let i = 0; i < allStudent.length - 1; i++) {
    if (allStudent[i] === studentName) {
      return true;
    }
  }

  return false;
};

const res = findStudent(students, "Erics");

console.log(res, "---");
