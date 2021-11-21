// Test for Employee.js
const Employee = require('../lib/Employee');

// Test to create an object
test('creates an employee object', () => {
  const employee = new Employee('Tommy', 90, 'tommyl.dmd@gmail.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// Gets employee's name
test('gets employee name', () => {
  const employee = new Employee('Tommy', 90, 'tommyl.dmd@gmail.com');

  expect(employee.getName()).toEqual(expect.any(String));
});

// Gets employee ID
test('gets employee ID', () => {
  const employee = new Employee('Tommy', 90, 'tommyl.dmd@gmail.com');

  expect(employee.getId()).toEqual(expect.any(Number));
});

// Gets employee's email
test('gets employee email', () => {
  const employee = new Employee('Tommy', 90, 'tommyl.dmd@gmail.com');

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Gets the role of the employee
test('gets role of employee', () => {
  const employee = new Employee('Tommy', 90, 'tommyl.dmd@gmail.com');

  expect(employee.getRole()).toEqual("Employee");
});