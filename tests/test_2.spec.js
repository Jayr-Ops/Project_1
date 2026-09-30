const {test,expect} = require('@playwright/test');

test('flipkart login', async({page}) => {
    await page.goto("https://www.flipkart.com/account/login")
    await page.locator('//*[@id="1"]').fill('+919714373117')
    await page.waitForTimeout(1000)
});