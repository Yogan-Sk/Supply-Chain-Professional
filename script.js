// --- GREETING MODAL ---
window.addEventListener("load", () => {
  const modal = document.getElementById("welcomeModal");
  const viewChoice = document.getElementById("viewChoice");
  const viewButtons = document.getElementById("viewButtons");

  setTimeout(() => {
    viewChoice.style.display = "block";
    viewButtons.style.display = "flex";
  }, 2000);

  document.getElementById("desktopBtn").addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("mobile-view");
  });

  document.getElementById("mobileBtn").addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.add("mobile-view");
  });
});

// --- HAMBURGER MENU ---
const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => sideMenu.classList.add("show"));
closeMenu.addEventListener("click", () => sideMenu.classList.remove("show"));
document.addEventListener("click", (e) => {
  if (!sideMenu.contains(e.target) && e.target !== hamburger) {
    sideMenu.classList.remove("show");
  }
});

// --- CHAT WIDGET ---
const chatBubble = document.getElementById("chatBubble");
const chatBox = document.getElementById("chatBox");
const sendMessage = document.getElementById("sendMessage");
const chatMessage = document.getElementById("chatMessage");

chatBubble.addEventListener("click", () => chatBox.classList.toggle("show"));
sendMessage.addEventListener("click", () => {
  const msg = chatMessage.value.trim();
  if (msg) {
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/917995891015?text=${encoded}`, "_blank");
    chatMessage.value = "";
    chatBox.classList.remove("show");
  } else {
    alert("Please type a message!");
  }
});
