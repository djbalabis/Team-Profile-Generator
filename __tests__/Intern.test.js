const Intern = require("../lib/Intern");

test("creates an Intern", () => {
  const i = new Intern("DJ", "1", "DJ@email.com", "Google");

  expect(i.getRole()).toBe("Intern");
});

test("gets school property", () => {
  const i = new Intern("DJ", "1", "DJ@email.com", "Google");

  expect(i.school).toBe("Google");
});

test("gets school method", () => {
  const i = new Intern("DJ", "1", "DJ@email.com", "Google");

  expect(i.getSchool()).toBe("Google");
});
