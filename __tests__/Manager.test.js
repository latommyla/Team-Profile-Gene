const Manager = require('../lib/Manager');

test('creates Manager object', () => {
  const manager = new Manager('Tommy', 90, 'tommyl.dmd@gmail.com', 2);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
  const manager = new Manager('Tommy', 90, 'tommyl.dmd@gmail.com');

  expect(manager.getRole()).toEqual("Manager");
});