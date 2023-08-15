export default class AperturaDeCuenta {
    primerFoto = ':nth-child(2) > .MuiPaper-root > .w-full.flex > .flex'
    segundaFoto = ':nth-child(3) > .MuiPaper-root > .w-full.flex > .flex > .MuiButton-root'
    tercerFoto = ':nth-child(4) > .MuiPaper-root > .w-full.flex > .flex > .MuiButton-root'
    cuartaFoto = ':nth-child(5) > .MuiPaper-root > .w-full.flex > .flex > .MuiButton-root'
    botonContinuar = '.MuiDialogActions-root > .MuiButton-contained'
    dropzone = '.dropzone'
    inputFile = "input[type='file']"


    getPrimerFoto() {
        return cy.get(this.primerFoto)
    }

    getSegundaFoto() {
        return cy.get(this.segundaFoto)
    }

    getTercerFoto() {
        return cy.get(this.tercerFoto)
    }

    getCuartaFoto() {
        return cy.get(this.cuartaFoto)
    }

    getBotonContinuar() {
        return cy.get(this.botonContinuar)
    }

    getDropzone() {
        return cy.get(this.dropzone)
    }

    getInputFile() {
        return cy.get(this.inputFile)
    }
}