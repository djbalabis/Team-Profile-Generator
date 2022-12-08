const { test } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("creates an Engineer", () => {
  const e = new Engineer("DJ", "1", "DJ@email.com", "djbalabis");

  expect(e.getRole()).toBe("Engineer");
});

test("github property", () => {
  const e = new Engineer("DJ", "1", "DJ@email.com", "djbalabis");

  expect(e.github).toBe("djbalabis");
});

test("github method", () => {
  const e = new Engineer("DJ", "1", "DJ@email.com", "djbalabis");

  expect(e.getGithub()).toBe(
    '<a href="https://github.com/djbalabis" target="_blank" rel="noopener noreferrer">djbalabis</a>'
  );
});
