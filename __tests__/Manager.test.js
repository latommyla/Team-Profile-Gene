// Test for Manager.js
const Manager = require('../lib/Manager');

// Test to create an object
test('creates Manager object', () => {
  const manager = new Manager('Tommy', 90, 'tommyl.dmd@gmail.com', 2);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Gets the role of the employee
test('gets role of employee', () => {
  const manager = new Manager('Tommy', 90, 'tommyl.dmd@gmail.com');

  expect(manager.getRole()).toEqual("Manager");
});