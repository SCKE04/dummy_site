// Simulate an API call
async function simulateApiCall(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ success: true, message: `Callback received for ${data.name} at ${data.email}` });
        }, 2000);
    });
}

// Handle callback form submission
document.getElementById('callbackForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const name = document.getElementById('userName').value;
    const email = document.getElementById('userEmail').value;
    const resultDiv = document.getElementById('callbackResult');

    resultDiv.classList.add('d-none');
    resultDiv.textContent = 'Processing your callback...';

    const result = await simulateApiCall({ name, email });

    resultDiv.classList.remove('d-none');
    resultDiv.textContent = result.success ?
        result.message :
        'An error occurred while processing your callback.';
});