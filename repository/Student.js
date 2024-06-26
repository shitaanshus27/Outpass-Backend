const Student = require("../models/Student");

async function createStudent(user) {
  try {
    const student = new Student(user);
    await student.save();
    return student;
  } catch (error) {
    console.log("Something went wrong while creating Student!!");
    throw error;
  }
}

async function findStudent(user) {
  try {
    const data = await Student.findOne({});
    return data;
  } catch (error) {
    console.log("Something went wrong while searching Student!!");
    throw error;
  }
}

module.exports = {
  createStudent,
  findStudent,
};
