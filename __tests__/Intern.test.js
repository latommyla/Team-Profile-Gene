// Test for Intern.js
const Intern = require('../lib/Intern');

// Test to create an object
test('creates Intern object', () => {
  const intern = new Intern('Tommy', 90, 'tommyl.dmd@gmail.com', 'UCSD');
  
  expect(intern.school).toEqual(expect.any(String));
});

// Gets intern's school name
test('gets employee school', () => {
  const intern = new Intern('Tommy', 90, 'tommyl.dmd@gmail.com', 'UCSD');

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Gets the role of the employee
test('gets role of employee', () => {
  const intern = new Intern('Tommy', 90, 'tommyl.dmd@gmail.com', 'UCSD');

  expect(intern.getRole()).toEqual("Intern");
})