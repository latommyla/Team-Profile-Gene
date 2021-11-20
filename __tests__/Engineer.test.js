const Engineer = require('../lib/Engineer');

test('creates Engineer object', () => {
  const engineer = new Engineer('Tommy', 90, 'tommyl.dmd@gmail.com', 'latommyla');

  expect(engineer.github) .toEqual(expect.any(String));
});

test('gets github value', () => {
  const engineer = new Engineer('Tommy', 90, 'tommyl.dmd@gmail.com', 'latommyla');

  expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get role of employee', () => {
  const engineer = new Engineer('Tommy', 90, 'tommyl.dmd@gmail.com', 'latommyla');

  expect(engineer.getRole()).toEqual("Engineer");
});