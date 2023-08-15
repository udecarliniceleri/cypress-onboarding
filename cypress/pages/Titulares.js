export default class Titulares {
    dni = '.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(1) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root'
    inputDni = '.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(2)'
    cuit = '.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(3)'
    cuitInput = '.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(4)'
    nombre = '.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(5)'
    segundoNombre = '.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(6)'
    apellido = '.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(7)'
    nacionalidad = '.px-16 > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(8)'
    fechaDeNacimiento = '.MuiGrid-container > :nth-child(9)'
    genero = ':nth-child(10) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root'
    estadoCivil = ':nth-child(11) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root'
    mail = ':nth-child(2) > :nth-child(2) > .MuiGrid-container > :nth-child(1)'
    telefono = ':nth-child(2) > :nth-child(2) > .MuiGrid-container > :nth-child(2)'
    nacionalidad2 = ':nth-child(3) > .mb-16 > :nth-child(2) > .MuiGrid-container > :nth-child(1)'
    provincia = ':nth-child(3) > .mb-16 > :nth-child(2) > .MuiGrid-container > :nth-child(2)'
    calle = ':nth-child(3) > .mb-16 > :nth-child(2) > .MuiGrid-container > .MuiGrid-grid-lg-4'
    altura = ':nth-child(3) > .mb-16 > :nth-child(2) > .MuiGrid-container > :nth-child(5)'
    piso = ':nth-child(3) > .mb-16 > :nth-child(2) > .MuiGrid-container > :nth-child(6)'
    depto = ':nth-child(3) > :nth-child(1) > :nth-child(2) > .MuiGrid-container > :nth-child(7)'
    codPostal = ':nth-child(3) > .mb-16 > :nth-child(2) > .MuiGrid-container > :nth-child(8)'
    checkLegal = '.MuiCheckbox-root > .PrivateSwitchBase-input'
    nacionalidadLegal = ':nth-child(3) > :nth-child(2) > .MuiGrid-container > :nth-child(1) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root'
    provinciaLegal = ':nth-child(3) > :nth-child(2) > .MuiGrid-container > :nth-child(2) > .flex > .MuiAutocomplete-root > .MuiFormControl-root > .MuiOutlinedInput-root'
    calleReal = ':nth-child(3) > :nth-child(2) > .MuiGrid-container > .MuiGrid-grid-lg-4'
    alturaReal = ':nth-child(3) > :nth-child(2) > .MuiGrid-container > :nth-child(5)'
    pisoReal = ':nth-child(3) > :nth-child(2) > .MuiGrid-container > :nth-child(6)'
    deptoReal = ':nth-child(3) > :nth-child(2) > .MuiGrid-container > :nth-child(7)'
    codPostalReal = ':nth-child(3) > :nth-child(2) > .MuiGrid-container > :nth-child(8)'
    tipoDeTrabajo = ':nth-child(4) > :nth-child(2) > .MuiGrid-container > .MuiGrid-root'
    declaracionJuradaA = ':nth-child(1) > .MuiFormControl-root > .MuiFormGroup-root'
    declaracionJuradaB = ':nth-child(2) > .MuiFormControl-root > .MuiFormGroup-root'
    declaracionJuradaC = ':nth-child(3) > .MuiFormControl-root > .MuiFormGroup-root'
    botonConfirmar = '.justify-end > .MuiButton-contained'
    getList = 'li'

    getDni() {
        return cy.get(this.dni)
    }

    getInputDni() {
        return cy.get(this.inputDni)
    }

    getCuit() {
        return cy.get(this.cuit)
    }

    getCuitInput() {
        return cy.get(this.cuitInput)
    }

    getNombre() {
        return cy.get(this.nombre)
    }

    getSegundoNombre() {
        return cy.get(this.segundoNombre)
    }

    getApellido() {
        return cy.get(this.apellido)
    }

    getNacionalidad() {
        return cy.get(this.nacionalidad)
    }

    getFechaDeNacimiento() {
        return cy.get(this.fechaDeNacimiento)
    }

    getGenero() {
        return cy.get(this.genero)
    }

    getEstadoCivil() {
        return cy.get(this.estadoCivil)
    }

    getMail() {
        return cy.get(this.mail)
    }

    getTelefono() {
        return cy.get(this.telefono)
    }

    getNacionalidad2() {
        return cy.get(this.nacionalidad2)
    }

    getProvincia() {
        return cy.get(this.provincia)
    }

    getCalle() {
        return cy.get(this.calle)
    }

    getAltura() {
        return cy.get(this.altura)
    }

    getPiso() {
        return cy.get(this.piso)
    }

    getDepto() {
        return cy.get(this.depto)
    }

    getCodPostal() {
        return cy.get(this.codPostal)
    }

    getCheckLegal() {
        return cy.get(this.checkLegal)
    }

    getNacionalidadLegal() {
        return cy.get(this.nacionalidadLegal)
    }

    getProvinciaLegal() {
        return cy.get(this.provinciaLegal)
    }

    getCalleLegal() {
        return cy.get(this.calleReal)
    }

    getAlturaLegal() {
        return cy.get(this.alturaReal)
    }

    getPisoLegal() {
        return cy.get(this.pisoReal)
    }

    getDeptoLegal() {
        return cy.get(this.deptoReal)
    }

    getCodPostalLegal() {
        return cy.get(this.codPostalReal)
    }

    getTipoDeTrabajo() {
        return cy.get(this.tipoDeTrabajo)
    }

    getDeclaracionJuradaA() {
        return cy.get(this.declaracionJuradaA)
    }

    getDeclaracionJuradaB() {
        return cy.get(this.declaracionJuradaB)
    }

    getDeclaracionJuradaC() {
        return cy.get(this.declaracionJuradaC)
    }

    getBotonConfirmar() {
        return cy.get(this.botonConfirmar)
    }
    getLi() {
        return cy.get(this.getList)
    }
}