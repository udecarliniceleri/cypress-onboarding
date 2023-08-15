export default class Inicio {
    humana = '.css-uxaz7x'
    titulares = '[aria-label="Agregar nuevo"] > .MuiButton-root'
    cuentasBancarias = ':nth-child(2) > .flex > [aria-label="Agregar nuevo"] > .MuiButton-root'
    cuentaBancariaMobile = ':nth-child(2) > .MuiGrid-root > .items-center > [aria-label="Agregar nuevo"] > .MuiButton-root > .MuiButton-endIcon > .material-icons'
    perfilDelInversor = '.flex > .MuiButton-root > .MuiButton-endIcon > .material-icons'
    perfilDelInversorMobile = '.items-center > .MuiButton-root > .MuiButton-endIcon > .material-icons'
    checkTerminosYCondiciones = '.PrivateSwitchBase-input'
    boton = 'button'
    botonContinuar = '.MuiDialogActions-root > .MuiButton-contained'

    getHumana() {
        return cy.get(this.humana)
    }

    getTitulares() {
        return cy.get(this.titulares)
    }

    getCuentasBancarias() {
        return cy.get(this.cuentasBancarias)
    }

    getCuentasBancariasMobile() {
        return cy.get(this.cuentaBancariaMobile)
    }

    getPerfilDelInversor() {
        return cy.get(this.perfilDelInversor)
    }

    getPerfilDelInversorMobile() {
        return cy.get(this.perfilDelInversorMobile)
    }

    getCheckTerminosYCondiciones() {
        return cy.get(this.checkTerminosYCondiciones)
    }

    getBoton() {
        return cy.get(this.boton)
    }

    getBotonContinuar() {
        return cy.get(this.botonContinuar)
    }
}