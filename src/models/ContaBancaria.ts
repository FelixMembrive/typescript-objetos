export class ContaBancaria {
    saldo: number

    constructor(){
        this.saldo = 0
    }

    consultar() {
        return this.saldo
    }
}