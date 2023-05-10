const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe('tests movie app', () => {
  test("test movies app", async () => {
    await driver.get('http://localhost:3000')
    await driver.findElement(By.css('#add-movie-input')).sendKeys("Titanic", Key.ENTER);
  });

  test('checks if movie watched works', async () => {
    const checkboxes = await driver.findElements(By.css('#movies-list li input[type="checkbox"]'));
    if (checkboxes.length > 0) {
      const checkbox = checkboxes[0];
      checkbox.click();
      expect(await checkbox.getAttribute('checked')).toBe('true');
    } 
  });

  test('checks if movie delete works', async () => {
    const buttons = await driver.findElements(By.css('#movies-list li button'));
    if (buttons.length > 0) {
      const button = buttons[0];
      button.click();
      expect(await driver.findElements(By.css('#movies-list li')).length).toBe(0);
    } 
  });

  test('checks if the warning works', async () => {
    const inputs = await driver.findElements(By.css('#movies-list li input[type="checkbox"]'));
    if (inputs.length > 0) {
      const input = inputs[0];
      input.click();
      const warning = await driver.findElement(By.css('#message'));
      expect(await warning.getAttribute('value')).toBe('Watched Titanic');
    } 
  });
});
