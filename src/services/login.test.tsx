import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        const email = 'teste@email.com'
        const senha = '123456'
        login(email,senha)
        expect(mockAlert).toHaveBeenCalledWith('Bem vinda!')
    })
})