// Test for Engineer.js
const Engineer = require('../lib/Engineer');

// Test to create an object
test('creates Engineer object', () => {
  const engineer = new Engineer('Tommy', 90, 'tommyl.dmd@gmail.com', 'latommyla');

  expect(engineer.github) .toEqual(expect.any(String));
});

// Gets engineer's github username
test('gets github value', () => {
  const engineer = new Engineer('Tommy', 90, 'tommyl.dmd@gmail.com', 'latommyla');

  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Gets the role of the employee
test('get role of employee', () => {
  const engineer = new Engineer('Tommy', 90, 'tommyl.dmd@gmail.com', 'latommyla');

  expect(engineer.getRole()).toEqual("Engineer");
});