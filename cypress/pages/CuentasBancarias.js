export default class CuentasBancarias {
    cbu = '.MuiGrid-grid-md-8'
    cbuConfirmar = '.MuiDialogActions-root > .MuiButton-contained'
    alias = '.MuiGrid-container > :nth-child(2)'
    banco = '.MuiGrid-container > :nth-child(3)'
    getList = 'li'
    tipoDeCuenta = '.MuiGrid-container > :nth-child(4)'
    tipoDeMoneda = '.MuiGrid-container > :nth-child(5)'
    botonConfirmar = '.justify-end > .MuiButton-contained'


    getCbu() {
        return cy.get(this.cbu)
    }

    getCbuConfirmar() {
        return cy.get(this.cbuConfirmar)
    }

    getAlias() {
        return cy.get(this.alias)
    }

    getBanco() {
        return cy.get(this.banco)
    }

    getLi() {
        return cy.get(this.getList)
    }

    getTipoDeCuenta() {
        return cy.get(this.tipoDeCuenta)
    }

    getTipoDeMoneda() {
        return cy.get(this.tipoDeMoneda)
    }

    getBotonConfirmar() {
        return cy.get(this.botonConfirmar)
    }
}