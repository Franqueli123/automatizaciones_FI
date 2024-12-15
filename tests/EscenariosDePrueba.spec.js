const { test, expect } = require('@playwright/test');

    test('should allow me to add todo items', async ({ page }) => {
        await page.goto('https://www.aerolineas.com.ar');

        const ClickenBuscar=page.locator("xpath=//button[@id='search-flights']")
        await ClickenBuscar.click()
        
        const mensajeErrorOrigenVuelo=page.locator("xpath=(//span[@type='formInputError'])[1]")
        await mensajeErrorOrigenVuelo.scrollIntoViewIfNeeded();
        await expect(mensajeErrorOrigenVuelo).toContainText(['No olvides ingresar el origen'])
     
    });


    