// No actual connection code - just simulation
function simulateConnection() {
    setTimeout(() => {
        alert('Simulated Connection Successful!');
    }, Math.random() * 3000);
}
document.querySelector('.connect-btn').addEventListener('click', simulateConnection);
