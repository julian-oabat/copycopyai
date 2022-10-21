const { Builder } = require('selenium-webdriver');
require("chromedriver");

(async function helloSelenium() {
    let driver = new Builder()
        .forBrowser('chrome')
        .usingServer('http://localhost:4443/wd/hub')
        .build();

    
    // await driver.quit();
})();

// $serverUrl = 'http://selenium:4444';
// $driver = RemoteWebDriver::create($serverUrl, DesiredCapabilities::chrome());
// $result = $driver->get($this->entryUrl);
// dd($result->getTitle());