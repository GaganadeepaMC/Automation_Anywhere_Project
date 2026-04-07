const { test, expect, request } = require('@playwright/test');

test('Learning Instance API Flow', async () => {
    const apiContext = await request.newContext();

    // Login API
    const loginResponse = await apiContext.post('/api/login', {
        data: {
            username: 'your-username',
            password: 'your-password'
        }
    });

    expect(loginResponse.status()).toBe(200);

    const token = (await loginResponse.json()).token;

    // Create Learning Instance
    const createResponse = await apiContext.post('/api/learning-instance', {
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            name: 'Test Instance'
        }
    });

    expect(createResponse.status()).toBe(201);

    const body = await createResponse.json();

    expect(body).toHaveProperty('id');
    expect(body.name).toBe('Test Instance');
});