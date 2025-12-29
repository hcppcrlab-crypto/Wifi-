// Network status
function updateStatus() {
  const status = document.getElementById("status");
  if (navigator.onLine) {
    status.textContent = "✅ You are Online";
    status.style.color = "lightgreen";
  } else {
    status.textContent = "❌ You are Offline";
    status.style.color = "red";
  }
}

window.addEventListener("online", updateStatus);
window.addEventListener("offline", updateStatus);
updateStatus();

// Device info
document.getElementById("browser").textContent = navigator.userAgent;
document.getElementById("platform").textContent = navigator.platform;
document.getElementById("language").textContent = navigator.language;
document.getElementById("screen").textContent =
  screen.width + " x " + screen.height;
