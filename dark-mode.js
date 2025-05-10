const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

if (isDarkMode) {
  body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');


  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});
