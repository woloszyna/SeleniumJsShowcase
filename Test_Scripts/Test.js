const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('MicrosoftEdge').build();
    try {
        await driver.get('http://www.google.com/ncr');
        await driver.findElement(By.id('W0wltc')).click();
        await driver.findElement(By.name('q')).sendKeys('dummy', Key.RETURN);
        await driver.wait(until.titleIs('dummy - Google Search'), 1000);
    } finally {
        await driver.quit();
    }
})();