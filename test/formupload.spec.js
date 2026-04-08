const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const DashboardPage = require('../pages/dashboardPage');
const FormPage = require('../pages/formPage');

test('Form Upload Flow', async ({ page }) => {

  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const form = new FormPage(page);

  await page.goto('https://your-app-url');

  await login.login('your-username', 'your-password');

  await dashboard.goToAutomation();
  await dashboard.clickCreate();

  await form.createForm('Sample Form');

  // Fill form
  await form.fillForm('Test Input', 'tests/sample.pdf');

  // Assertions
  await expect(page.locator('#textbox')).toHaveValue('Test Input');

  await form.saveForm();

  // Verify upload success
  await expect(page.locator('.toast-success')).toBeVisible();
});
