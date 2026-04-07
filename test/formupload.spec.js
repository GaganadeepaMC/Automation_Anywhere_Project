const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const DashboardPage = require('../pages/dashboardPage');
const FormPage = require('../pages/formPage');

test('Form Upload Flow', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    const form = new FormPage(page);

    await login.goto();
    await login.login('your-username', 'your-password');

    await dashboard.navigateToAutomation();
    await dashboard.clickCreate();

    await form.createForm();
    await form.fillForm('Test Input', './test-data/sampleFile.pdf');
    await form.saveForm();

    await expect(page.locator('text=Uploaded')).toBeVisible();
});