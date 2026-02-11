import { Login } from "./Login";

describe("Login", () => {

  const mockEmail = "shaolinmatadordeporco.email";
  const mockPassword = "42069";

  it("Deve exibir um alert com boas vindas", async () => {
    const response  = await Login(mockEmail, mockPassword);
    expect(response).toBeTruthy();
  });
  it("Deve exibir um erro caso o email seja invalido", async () => {
    const response  = await Login("shaolinmatadordeporco", mockPassword);
    expect(response).toBeFalsy();
  });
});
