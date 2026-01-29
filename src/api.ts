const conta = {
    email: 'shaolinmatadordeporco.email',
    senha: '42069',
    nome: 'Tiao'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    },3000)
})