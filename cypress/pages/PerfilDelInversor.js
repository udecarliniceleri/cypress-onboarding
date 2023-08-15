export default class PerfilDelInversor {
    check1 = ':nth-child(1) > .MuiFormControl-root > .MuiFormGroup-root'
    check2 = ':nth-child(2) > .MuiFormControl-root > .MuiFormGroup-root'
    check3 = ':nth-child(3) > .MuiFormControl-root > .MuiFormGroup-root'
    check4 = ':nth-child(4) > .MuiFormControl-root > .MuiFormGroup-root'
    botonConfirmar = '.MuiButton-contained'
    botonFinalizar = '.MuiDialogActions-root > .MuiButton-contained'

    getCheck1() {
        return cy.get(this.check1)
    }

    getCheck2() {
        return cy.get(this.check2)
    }

    getCheck3() {
        return cy.get(this.check3)
    }

    getCheck4() {
        return cy.get(this.check4)
    }

    getBotonConfirmar() {
        return cy.get(this.botonConfirmar)
    }

    getBotonFinalizar() {
        return cy.get(this.botonFinalizar)
    }
}