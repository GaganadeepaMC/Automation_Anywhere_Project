const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const DashboardPage = require('../pages/dashboardPage');
const MessageBoxPage = require('../pages/messageBoxPage');

test('Message Box Task Flow', async ({ page }) => {

  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const message = new MessageBoxPage(page);

  await page.goto('https://your-app-url');

  // Login
  await login.login('your-username', 'your-password');

  // Navigation
  await dashboard.goToAutomation();
  await dashboard.clickCreate();

  // Create Task
  await message.createTask('Test Task');

  // Assertions
  await expect(page.locator('#taskName')).toBeVisible();

  // Add Message Box
  await message.addMessageBox();

  // Save
  await message.saveTask();

  // Validate success
  await expect(page.locator('.toast-success')).toBeVisible();
});
