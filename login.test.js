const { login } = require("./login");

describe("login()", () => {
  test("trả về true khi username và password đúng", () => {
    expect(login("admin", "123")).toBe(true);
  });

  test("trả về false khi username sai", () => {
    expect(login("user", "123")).toBe(false);
  });

  test("trả về false khi password sai", () => {
    expect(login("admin", "456")).toBe(false);
  });
});
