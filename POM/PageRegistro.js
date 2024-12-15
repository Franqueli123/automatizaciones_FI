const { expect } = require('@playwright/test');

exports.PageRegistro = class PageRegistro {
    
  /**
   * @param {import('@playwright/test').Page} page
   */
  ///etiqueta[@atributo="valor"]
  constructor(page) {
    this.page = page;
    this.SeleccionartituloMr = page.locator("xpath=//input[@id='field-id_gender-1']")
    this.AlmacenPrimerNombre = page.locator("xpath=//input[@id='field-firstname']")
    this.almacenSegundoNombre = page.locator("xpath=//input[@id='field-lastname']")
    this.AlmacenEmail = page.locator("xpath=//input[@id='field-email']")
    this.AlmacenPassword = page.locator("xpath=//input[@id='field-password']")
    this.FechadeCumpleanos = page.locator("xpath=//input[@id='field-birthday']")
    this.SeleccionarSioNo = page.locator("xpath=//input[@name='option']")
    this.AceptarCondiciones = page.locator("xpath=//input[@name= 'psgdpr']")
    this.Aceptarcosas = page.locator("xpath=//input[@name='newsletter']")
    this.Guardar = page.locator("xpath=//button[@data-link-action='save-customer']")
    }

    async Clickear(){
        await this.SeleccionartituloMr.check()
    }

}

