// Funcție pentru schimbare limbă
function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || key;
  });
}

// Dicționar pentru traduceri
const translations = {
  ro: {
    home: "Acasă",
    dispozitive: "Dispozitive",
    clienti: "Clienți",
    servere: "Servere",
    aplicatie: "Aplicație",
    configurari: "Configurări",
    profil: "Profil",
    administrare: "Administrare",
    delogare: "Delogare",
  },
  en: {
    home: "Home",
    dispozitive: "Devices",
    clienti: "Clients",
    servere: "Servers",
    aplicatie: "App",
    configurari: "Settings",
    profil: "Profile",
    administrare: "Admin",
    delogare: "Logout",
  }
};

// Funcție pentru delogare (simulată)
function logout() {
  alert("Te-ai delogat cu succes!");
  window.location.href = "index.html";
}

// Mobile hamburger toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");

  if (hamburger && sidebar) {
    hamburger.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  }
});
