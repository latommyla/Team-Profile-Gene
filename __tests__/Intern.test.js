const Intern = require('../lib/Intern');

test('creates Intern object', () => {
  const intern = new Intern('Tommy', 90, 'tommyl.dmd@gmail.com', 'UCSD');
  
  expect(intern.school).toEqual(expect.any(String));
});

test('gets employee school', () => {
  const intern = new Intern('Tommy', 90, 'tommyl.dmd@gmail.com', 'UCSD');

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets role of employee', () => {
  const intern = new Intern('Tommy', 90, 'tommyl.dmd@gmail.com', 'UCSD');

  expect(intern.getRole()).toEqual("Intern");
})