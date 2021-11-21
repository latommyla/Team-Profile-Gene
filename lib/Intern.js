// Require Employee.js
const Employee = require('./Employee');

// Intern class
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  // Gets intern's school name
  getSchool() {
    return this.school;
  }

  // Gets role of the employee
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;