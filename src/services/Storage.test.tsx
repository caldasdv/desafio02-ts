import {changeLocalStorage, createLocalStorage, getAllLocalStorage} from "./Storage";

const dioBank = {
    login: false
}

const mockSetItem = jest.spyOn(Storage.prototype, "setItem")

describe('Storage', () => {

    it('Deve retornor o objeto no locaStorage com a chave diobank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype,"getItem")
        getAllLocalStorage();
        expect(mockGetItem).toHaveBeenCalledWith("diobank");
    });
    it('Deve criar o objeto localStorage ', () => {

        createLocalStorage();
        expect(mockSetItem).toHaveBeenCalledWith('diobank',JSON.stringify(dioBank));
    });
    it('Deve alterar o valor do objeto no localStorage ', () => {
        changeLocalStorage(dioBank);
        expect(mockSetItem).toHaveBeenCalledWith('diobank',JSON.stringify(dioBank));
    })
})