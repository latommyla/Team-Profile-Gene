// Require Employee.js
const Employee = require('./Employee');

// Engineer class
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // Gets engineer's github username
  getGithub() {
    return this.github;
  }

  // Gets the employees role
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;