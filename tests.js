const { simulateApiCall } = require('./script');

// Test simulateApiCall
test('simulateApiCall returns success response', async() => {
    const data = { name: 'Test User', email: 'test@example.com' };
    const response = await simulateApiCall(data);
    expect(response).toEqual({
        success: true,
        message: 'Callback received for Test User at test@example.com',
    });
});

// Mock DOM for form testing
document.body.innerHTML = `
    <form id="callbackForm">
        <input id="userName" value="Test User" />
        <input id="userEmail" value="test@example.com" />
        <div id="callbackResult"></div>
    </form>
`;

// Test form submission handler
test('Callback form updates result div', async() => {
    const form = document.getElementById('callbackForm');
    const resultDiv = document.getElementById('callbackResult');
    form.dispatchEvent(new Event('submit', { bubbles: true }));

    expect(resultDiv.textContent).toContain('Processing your callback...');
});