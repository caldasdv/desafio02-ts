const conta = {
  email: "shaolinmatadordeporco.email",
  senha: "42069",
  nome: "Tiao",
  balance: "2000.00",
  id: "1",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
