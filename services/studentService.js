const Student = require('../models/student');

exports.createStudent = async (studentData) => {
  const student = new Student(studentData);
  return await student.save();
};

exports.getAllStudents = async () => {
  return await Student.find();
};

exports.getStudentById = async (id) => {
  return await Student.findById(id);
};

exports.updateStudent = async (id, studentData) => {
  return await Student.findByIdAndUpdate(id, studentData, { new: true });
};

exports.deleteStudent = async (id) => {
  const result = await Student.findByIdAndDelete(id);
  return result ? true : false;
};
