import { Login } from "./Login";

describe("login", () => {
  const mockEmail = "teste@email.com";
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("Deve exibir um alert com boas vindas", () => {
    const email = "shaolinmatadordeporco.email";
    const senha = "123456";
    Login(email, senha);
    expect(mockAlert).toHaveBeenCalledWith("Bem vindo ao Dio Bank!");
  });
  it("Deve exibir um erro caso o email seja invalido", async () => {
    await Login("email@invalido.com", "123456");
    expect(mockEmail).toHaveBeenCalledwith("Email invalido");
  });
});
