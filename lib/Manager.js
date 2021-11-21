// Require Employee.js
const Employee = require('./Employee');

// Manager class
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // Gets manager's office number
  getOfficeNumber() {
    return this.officeNumber;
  }

  // Gets role of employee
  getRole() {
    return "Manager";
  }
}

module.exports = Manager; 