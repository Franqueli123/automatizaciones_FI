const { test, expect } = require('@playwright/test');
const { HomePage } = require('../POM/HomePage');


test('has title', async ({ page }) => {

  const homePage = new HomePage(page)
  
})