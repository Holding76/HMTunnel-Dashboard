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
    welcome: "Bun venit, "
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
    welcome: "Welcome, "
  }
};

function changeLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
  localStorage.setItem("language", lang);
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language") || "ro";
  changeLanguage(savedLang);
});
