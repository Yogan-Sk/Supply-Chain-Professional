// Greeting popup
window.onload = function() {
  const modal = document.getElementById("welcomeModal");
  modal.style.display = "flex";

  // Apply saved theme
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    document.querySelector(".theme-toggle").textContent = "☀️";
  }
};

function setView(type) {
  document.getElementById("welcomeModal").style.display = "none";
  if (type === "mobile") document.body.classList.add("mobile-view");
  else document.body.classList.remove("mobile-view");
}

// Navbar toggle
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('show');
}

// Resume download
function downloadResume() {
  const link = document.createElement('a');
  link.href = "Sai_Krishna_Burra_Supply_chain_Specalist.pdf";
  link.download = "Sai_Krishna_Burra_Resume.pdf";
  link.click();
  alert("📄 Resume downloaded successfully!");
}

// Like, share, hire counters
function likeProfile() {
  let c = parseInt(document.getElementById("likeCount").innerText);
  document.getElementById("likeCount").innerText = c + 1;
}

function shareProfile() {
  let c = parseInt(document.getElementById("shareCount").innerText);
  document.getElementById("shareCount").innerText = c + 1;
  navigator.clipboard.writeText(window.location.href);
  alert("Profile link copied!");
}

function hireProfile() {
  let c = parseInt(document.getElementById("hireCount").innerText);
  document.getElementById("hireCount").innerText = c + 1;
}

// Theme toggle
function toggleTheme() {
  const body = document.body;
  const toggleBtn = document.querySelector(".theme-toggle");
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
}
