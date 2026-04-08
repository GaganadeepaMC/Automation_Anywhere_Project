const { test, expect, request } = require('@playwright/test');

test('Learning Instance API Flow', async ({ request }) => {

  // Login API
  const loginRes = await request.post('/api/login', {
    data: {
      username: 'your-username',
      password: 'your-password'
    }
  });

  expect(loginRes.status()).toBe(200);

  const body = await loginRes.json();
  const token = body.token;

  // Create Learning Instance
  const createRes = await request.post('/api/learning-instance', {
    headers: {
      Authorization: `Bearer ${token}`
    },
    data: {
      name: 'Test Instance'
    }
  });

  expect(createRes.status()).toBe(201);

  const resBody = await createRes.json();

  // Validations
  expect(resBody).toHaveProperty('id');
  expect(resBody.name).toBe('Test Instance');
  expect(resBody.status).toBe('active');
});
const { test, expect } = require('@playwright/test');

test('Message Box Flow', async ({ page }) => {

  await page.goto('https://github.com'); // ✅ CORRECT PLACE

});
