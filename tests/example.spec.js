// @ts-check
const { test, expect } = require('@playwright/test');
const { HomePage } = require('../POM/HomePage');


test('has title', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/#');

  // Expect a title "to contain" a substring.
  //await expect(page).toHaveTitle(/MiTeleFe.com/);

  //await page.getByRole('link', { onclick: '"byCat(notebook)"' }).click();


  await page.locator("xpath=//a[@data-target='#exampleModal']").click();

  await page.locator("xpath=//input[@id='recipient-email']").fill("roberto@mail.com")
  await page.locator("xpath=//input[@id='recipient-name']").fill("roberto")
  await page.locator("xpath=//textarea[@id='message-text']").fill("No me anda la notebuk")
  await page.locator("xpath=//button[@onclick='send()']").click()

   //button[@onclick="send()"]
});


test('sign up', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/#');

  await page.locator("xpath=//a[@data-target='#signInModal']").click();
  await page.locator("xpath=//input[@id='sign-username']").fill("Franco")
  await page.locator("xpath=//input[@id='sign-password']").fill("franco3022YT")
  await page.locator("xpath=//button[@onclick='register()']").click()

});


test('has title whit const en locator', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/#');
  const nombrePrueba = "Franco"
  const passPrueba = "Franco3022YT"
  
  const locatorBotonSign = page.locator("xpath=//a[@data-target='#signInModal']")
  const localStorage = page.locator("xpath=//input[@id='sign-username']")
  const localStorage2 = page.locator("xpath=//input[@id='sign-password']")
  const locatorBotonSign2 = page.locator("xpath=//button[@onclick='register()']")
  
  await locatorBotonSign.click()
  await localStorage.fill(nombrePrueba)
  await localStorage2.fill(passPrueba)
  await locatorBotonSign2.click()


  //await page.locator("xpath=//input[@id='sign-password']").fill("franco3022YT")
  //await page.locator("xpath=//button[@onclick='register()']").click()

});


test('Mismo Test anterior pero ahora con POm', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto()
  await homePage.clickEnIngresar()
  await homePage.rellenarNomnbre("Franco")
  await homePage.rellenarPass('franco3022')
  await homePage.clickBotonSignIn()
});

test('Mismo Test anterior pero ahora con POm nuevo', async ({ page }) => {
  const homePage = new HomePage(page);
  const nombreUser = "franco"
  const passUser = "fran20230"

  await homePage.goto()
  await homePage.rellenarFull(nombreUser,passUser)
  await expect(page.locator("xpath=//a[@id='nameofuser']")).toHaveText("Welcome franco")
});



test('Log in negro', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto()
  await page.locator("xpath=//a[@id='login2']").click(); 
  await page.locator("xpath=//input[@id='loginusername']").fill("Franco")
  await page.locator("xpath=//input[@id='loginpassword']").fill("franco3022YT")
  await page.locator("xpath=//button[@onclick='logIn()']").click()
  await expect(page.locator("xpath=//a[@id='nameofuser']")).toHaveText("Welcome Franco")

});

