const Employee = require("../lib/Employee");

test("creates an employee", () => {
  const e = new Employee("DJ", "1", "DJ@email.com");

  expect(e.name).toBe("DJ");
  expect(e.id).toBe("1");
  expect(e.email).toBe("DJ@email.com");

  expect(e.getName()).toBe("DJ");
  expect(e.getId()).toBe("1");
  expect(e.getEmail()).toBe("DJ@email.com");
  expect(e.getRole()).toBe("Employee");
});
