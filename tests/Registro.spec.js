const { test, expect } = require('@playwright/test');
const { HomePage } = require('../POM/HomePage');
import { PageRegistro } from "../POM/PageRegistro";

test('has title', async ({ page }) => {
  
    //entrarr a la home page
    const homePage = new HomePage(page)
    await homePage.goto()
    
    //hacer click en ingresar
    await homePage.clickEnIngresar()
    
    //click en registro
    page.locator("xpath=(//a[@href='https://teststore.automationtesting.co.uk/index.php?controller=registration'])[1]").click()
    //seleccionar titulo
    const pageRegistro = new PageRegistro(page)
    await pageRegistro.Clickear()
    //rellenar casillas

    //aceptar condiciones


});

