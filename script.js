function changeLanguage(lang) {
  // Logica schimbare limba (exemplu simplu)
  alert('Schimbă limba în: ' + lang);
}

document.querySelector('.logout-btn').addEventListener('click', () => {
  alert('Delogare...');
  // window.location.href = 'login.html'; // redirecționare după delogare
});
