// Greeting popup
window.onload = function () {
  const modal = document.getElementById("welcomeModal");
  modal.style.display = "flex";
};

function setView(type) {
  document.getElementById("welcomeModal").style.display = "none";
  if (type === "mobile") document.body.classList.add("mobile-view");
  else document.body.classList.remove("mobile-view");
}

// Navbar toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Resume download
function downloadResume() {
  const link = document.createElement('a');
  link.href = "Sai_Krishna_Burra_Supply_chain_Specalist.pdf";
  link.download = "Sai_Krishna_Burra_Resume.pdf";
  link.click();
  alert("📄 Resume downloaded successfully!");
}

// Like & Share
function likeProfile() {
  let c = parseInt(document.getElementById("likeCount").innerText);
  document.getElementById("likeCount").innerText = c + 1;
}
function shareProfile() {
  let c = parseInt(document.getElementById("shareCount").innerText);
  document.getElementById("shareCount").innerText = c + 1;
  navigator.clipboard.writeText(window.location.href);
  alert("🔗 Profile link copied!");
}
