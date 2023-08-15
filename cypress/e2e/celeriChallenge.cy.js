const TitularesPage = require("../pages/Titulares");
const CuentaBancariaPage = require("../pages/CuentasBancarias");
const PerfilDelInversor = require("../pages/PerfilDelInversor");
const Inicio = require("../pages/Inicio");
const AperturaDeCuenta = require("../pages/AperturaDeCuenta");

describe("Celeri Challenge", () => {
  const inicio = new Inicio();
  const titulares = new TitularesPage();
  const cuentaBancaria = new CuentaBancariaPage();
  const perfilDelInversor = new PerfilDelInversor();
  const aperturaDeCuenta = new AperturaDeCuenta();

  it("Visit Celeri", () => {
    cy.viewport(1440, 900);
    const fotoAdjuntar = "blankphoto.jpg";

    cy.visit("https://product-onboarding.vercel.app/");
    inicio.getHumana().click();
    inicio.getTitulares().click();
    cy.wait(3000);
    /////TITULARES
    titulares.getDni().type("DNI", "{enter}");
    titulares.getInputDni().type(9999);
    titulares.getCuit().type("CUIT", "{enter}");
    titulares.getCuitInput().type(11111111111);
    titulares.getNombre().type("Uriel");
    titulares.getSegundoNombre().type("Test");
    titulares.getApellido().type("De Carlini");
    titulares.getNacionalidad().type("Argentina", "{enter}");
    titulares.getFechaDeNacimiento().type("31/05/2000");
    titulares.getGenero().type("Masculino");
    titulares.getLi().contains("Masculino").click();
    titulares.getEstadoCivil().type("Soltero");
    titulares.getLi().contains("Soltero").click();
    titulares.getMail().type("test@yopmail.com");
    titulares.getTelefono().type(1111111111);
    titulares.getNacionalidad2().type("Argentina");
    titulares.getLi().contains("Argentina").click();
    titulares.getProvincia().type("Ciudad Autonoma de Buenos Aires");
    titulares.getLi().contains("Ciudad Autonoma de Buenos Aires").click();
    titulares.getCalle().type("Calle Falsa");
    titulares.getAltura().type(123);
    titulares.getPiso().type(10);
    titulares.getDepto().type("A");
    titulares.getCodPostal().type(1111);
    titulares.getCheckLegal().check();
    titulares.getNacionalidadLegal().type("Argentina");
    titulares.getLi().contains("Argentina").click();
    titulares.getProvinciaLegal().type("Ciudad Autonoma de Buenos Aires");
    titulares.getLi().contains("Ciudad Autonoma de Buenos Aires").click();
    titulares.getCalleLegal().type("Calle Real");
    titulares.getAlturaLegal().type(321);
    titulares.getPisoLegal().type(10);
    titulares.getDeptoLegal().type("B");
    titulares.getCodPostalLegal().type(2222);
    titulares.getTipoDeTrabajo().type("Jubilado");
    titulares.getLi().contains("Jubilado").click();
    titulares.getDeclaracionJuradaA().contains("No").click();
    titulares.getDeclaracionJuradaB().contains("No").click();
    titulares.getDeclaracionJuradaC().contains("No").click();
    titulares.getBotonConfirmar().click();
    /////CUENTAS BANCARIAS
    inicio.getCuentasBancarias().click();
    cuentaBancaria.getCbu().type("0534919911100068441488");
    cy.wait(3000);
    cuentaBancaria.getCbuConfirmar().click();
    cuentaBancaria.getAlias().type("Test.alias");
    cuentaBancaria.getBanco().type("Banco Galicia");
    cuentaBancaria.getLi().contains("Banco Galicia").click();
    cuentaBancaria.getTipoDeCuenta().type("Caja De Ahorro");
    cuentaBancaria.getLi().contains("Caja De Ahorro").click();
    cuentaBancaria.getTipoDeMoneda().type("ARS - Pesos Argentinos");
    cuentaBancaria.getLi().contains("ARS - Pesos Argentinos").click();
    cuentaBancaria.getBotonConfirmar().click();
    /////PERFIL DEL INVERSOR
    inicio.getPerfilDelInversor().click();
    perfilDelInversor.getCheck1().contains("Algo").click();
    perfilDelInversor.getCheck2().contains("Alto").click();
    perfilDelInversor.getCheck3().contains("Sí").click();
    perfilDelInversor.getCheck4().contains("Sí").click();
    perfilDelInversor.getBotonConfirmar().click();
    perfilDelInversor.getBotonFinalizar().click();
    /////PAGINA DE INICIO
    cy.wait(2000);
    inicio.getCheckTerminosYCondiciones().check({ force: true });
    inicio.getBoton().contains("Abrir Cuenta").click();
    inicio.getBotonContinuar().click();
    ////Apertura de cuenta
    aperturaDeCuenta.getPrimerFoto().click();
    aperturaDeCuenta
      .getDropzone()
      .click()
      .then(() => {
        aperturaDeCuenta.getInputFile().attachFile(fotoAdjuntar);
      });
    aperturaDeCuenta.getBotonContinuar().click();
    aperturaDeCuenta.getSegundaFoto().click();
    aperturaDeCuenta
      .getDropzone()
      .click()
      .then(() => {
        aperturaDeCuenta.getInputFile().attachFile(fotoAdjuntar);
      });
    aperturaDeCuenta.getBotonContinuar().click();
    aperturaDeCuenta.getTercerFoto().click();
    aperturaDeCuenta
      .getDropzone()
      .click()
      .then(() => {
        aperturaDeCuenta.getInputFile().attachFile(fotoAdjuntar);
      });
    aperturaDeCuenta.getBotonContinuar().click();
    aperturaDeCuenta.getCuartaFoto().click();
    aperturaDeCuenta
      .getDropzone()
      .click()
      .then(() => {
        aperturaDeCuenta.getInputFile().attachFile(fotoAdjuntar);
      });
    aperturaDeCuenta.getBotonContinuar().click();
    cy.wait(2000);
    aperturaDeCuenta.getBotonContinuar().click();
  });

  it("Visit Celeri Mobile", () => {
    cy.viewport(414, 896);
    const fotoAdjuntar = "blankphoto.jpg";

    cy.visit("https://product-onboarding.vercel.app/");
    inicio.getHumana().click();
    inicio.getTitulares().click();
    cy.wait(3000);
    /////TITULARES
    titulares.getDni().type("DNI", "{enter}");
    titulares.getInputDni().type(9999);
    titulares.getCuit().type("CUIT", "{enter}");
    titulares.getCuitInput().type(11111111111);
    titulares.getNombre().type("Uriel");
    titulares.getSegundoNombre().type("Test");
    titulares.getApellido().type("De Carlini");
    titulares.getNacionalidad().type("Argentina", "{enter}");
    titulares.getFechaDeNacimiento().type("31/05/2000");
    titulares.getGenero().type("Masculino");
    titulares.getLi().contains("Masculino").click();
    titulares.getEstadoCivil().type("Soltero");
    titulares.getLi().contains("Soltero").click();
    titulares.getMail().type("test@yopmail.com");
    titulares.getTelefono().type(1111111111);
    titulares.getNacionalidad2().type("Argentina");
    titulares.getLi().contains("Argentina").click();
    titulares.getProvincia().type("Ciudad Autonoma de Buenos Aires");
    titulares.getLi().contains("Ciudad Autonoma de Buenos Aires").click();
    titulares.getCalle().type("Calle Falsa");
    titulares.getAltura().type(123);
    titulares.getPiso().type(10);
    titulares.getDepto().type("A");
    titulares.getCodPostal().type(1111);
    titulares.getCheckLegal().check();
    titulares.getNacionalidadLegal().type("Argentina");
    titulares.getLi().contains("Argentina").click();
    titulares.getProvinciaLegal().type("Ciudad Autonoma de Buenos Aires");
    titulares.getLi().contains("Ciudad Autonoma de Buenos Aires").click();
    titulares.getCalleLegal().type("Calle Real");
    titulares.getAlturaLegal().type(321);
    titulares.getPisoLegal().type(10);
    titulares.getDeptoLegal().type("B");
    titulares.getCodPostalLegal().type(2222);
    titulares.getTipoDeTrabajo().type("Jubilado");
    titulares.getLi().contains("Jubilado").click();
    titulares.getDeclaracionJuradaA().contains("No").click();
    titulares.getDeclaracionJuradaB().contains("No").click();
    titulares.getDeclaracionJuradaC().contains("No").click();
    titulares.getBotonConfirmar().click();
    /////CUENTAS BANCARIAS
    inicio.getCuentasBancariasMobile().click();
    cuentaBancaria.getCbu().type("0534919911100068441488");
    cy.wait(3000);
    cuentaBancaria.getCbuConfirmar().click();
    cuentaBancaria.getAlias().type("Test.alias");
    cuentaBancaria.getBanco().type("Banco Galicia");
    cuentaBancaria.getLi().contains("Banco Galicia").click();
    cuentaBancaria.getTipoDeCuenta().type("Caja De Ahorro");
    cuentaBancaria.getLi().contains("Caja De Ahorro").click();
    cuentaBancaria.getTipoDeMoneda().type("ARS - Pesos Argentinos");
    cuentaBancaria.getLi().contains("ARS - Pesos Argentinos").click();
    cuentaBancaria.getBotonConfirmar().click();
    /////PERFIL DEL INVERSOR
    inicio.getPerfilDelInversorMobile().click();
    perfilDelInversor.getCheck1().contains("Algo").click();
    perfilDelInversor.getCheck2().contains("Alto").click();
    perfilDelInversor.getCheck3().contains("Sí").click();
    perfilDelInversor.getCheck4().contains("Sí").click();
    perfilDelInversor.getBotonConfirmar().click();
    perfilDelInversor.getBotonFinalizar().click();
    /////PAGINA DE INICIO
    cy.wait(2000);
    inicio.getCheckTerminosYCondiciones().check({ force: true });
    inicio.getBoton().contains("Abrir Cuenta").click();
    inicio.getBotonContinuar().click();
    ////Apertura de cuenta
    aperturaDeCuenta.getPrimerFoto().click();
    aperturaDeCuenta
      .getDropzone()
      .click()
      .then(() => {
        aperturaDeCuenta.getInputFile().attachFile(fotoAdjuntar);
      });
    aperturaDeCuenta.getBotonContinuar().click();
    aperturaDeCuenta.getSegundaFoto().click();
    aperturaDeCuenta
      .getDropzone()
      .click()
      .then(() => {
        aperturaDeCuenta.getInputFile().attachFile(fotoAdjuntar);
      });
    aperturaDeCuenta.getBotonContinuar().click();
    aperturaDeCuenta.getTercerFoto().click();
    aperturaDeCuenta
      .getDropzone()
      .click()
      .then(() => {
        aperturaDeCuenta.getInputFile().attachFile(fotoAdjuntar);
      });
    aperturaDeCuenta.getBotonContinuar().click();
    aperturaDeCuenta.getCuartaFoto().click();
    aperturaDeCuenta
      .getDropzone()
      .click()
      .then(() => {
        aperturaDeCuenta.getInputFile().attachFile(fotoAdjuntar);
      });
    aperturaDeCuenta.getBotonContinuar().click();
    cy.wait(2000);
    aperturaDeCuenta.getBotonContinuar().click();
  });
});
