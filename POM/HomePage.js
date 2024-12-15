const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.locatorBotonSign = page.locator("xpath=(//span[@class='hidden-sm-down'])[1]")
    this.localStorage = page.locator("xpath=//input[@placeholder='Ingresa desde dónde viajas']")
    this.localStorage2 = page.locator("xpath=//input[@placerholder='Ingresa hacia dónde viajas']")
    this.locatorBotonSign2 = page.locator("xpath=//button[@onclick='register()']")
  }

  async goto() {
    await this.page.goto('https://teststore.automationtesting.co.uk/index.php');
  }

  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.gettingStartedHeader).toBeVisible();
  }

  async pageObjectModel() {
    await this.getStarted();
    await this.pomLink.click();
  }

  async clickEnIngresar(){
    await this.locatorBotonSign.click()
  }

  async rellenarNomnbre(nombre){
    await this.localStorage.fill(nombre)
  }

  async rellenarPass(pass){
    await this.localStorage2.fill(pass)
  }

  async clickBotonSignIn(){
    await this.locatorBotonSign2.click()
  }

  async rellenarFull(name,pass){
    await this.clickEnIngresar()
    await this.rellenarNomnbre(name)
    await this.rellenarPass(pass)
    await this.clickBotonSignIn()
  }

};