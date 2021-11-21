// Employee class
class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email
  }

  // Get employees name
  getName() {
    return this.name;
  }

  // Gets employees ID
  getId() {
    return this.id;
  }

  // Gets employees email address
  getEmail() {
    return this.email;
  }

  // Gets the employees role
  getRole() {
    return 'Employee';
  }
};

module.exports = Employee;
