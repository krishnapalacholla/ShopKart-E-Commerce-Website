// Apply saved theme on every page
const body = document.body;
const savedMode = localStorage.getItem("mode");

// Apply mode immediately
if (savedMode === "night") {
  body.classList.add("night");
}

// Toggle button (only if it exists on the page)
const toggleBtn = document.getElementById("themeToggle");

if (toggleBtn) {
  toggleBtn.textContent = body.classList.contains("night") ? "☀️" : "🌙";

  toggleBtn.onclick = () => {
    body.classList.toggle("night");

    if (body.classList.contains("night")) {
      localStorage.setItem("mode", "night");
      toggleBtn.textContent = "☀️";
    } else {
      localStorage.setItem("mode", "day");
      toggleBtn.textContent = "🌙";
    }
  };
}
