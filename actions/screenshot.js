const { chromium } = require('playwright');

(async () => {
    //function code
    const browser = await chromium.launch({ headless: false, slowMo: 100 });
    const page = await browser.newPage();
    await page.goto('http://applitools.com');

    //Take screenshot
    await page.screenshot({ path: 'screenshot.png' });

    // take screenshot of an element
    const logo = await page.$('.logo');
    await logo.screenshot({ path: 'logo.png' });

    // take screenshot of full page (long page)
    await page.screenshot({ path: 'fullpage.png', fullPage: true });

    await browser.close();

})();