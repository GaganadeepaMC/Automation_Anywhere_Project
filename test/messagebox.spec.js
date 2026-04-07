const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const DashboardPage = require('../pages/dashboardPage');
const TaskBotPage = require('../pages/taskBotPage');

test('Message Box Task Creation', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    const taskBot = new TaskBotPage(page);

    await login.goto();
    await login.login('your-username', 'your-password');

    await dashboard.navigateToAutomation();
    await dashboard.clickCreate();

    await taskBot.createTaskBot('Test Bot');
    await taskBot.addMessageBox();
    await taskBot.saveTask();

    await expect(page.locator('text=Saved')).toBeVisible();
});