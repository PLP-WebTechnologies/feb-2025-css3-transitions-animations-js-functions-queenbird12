const button = document.getElementById('animateBtn');
const colorSelect = document.getElementById('colorSelect');

// Load saved theme from localStorage and apply it
function loadTheme() {
  const savedTheme = localStorage.getItem('buttonTheme');
  if (savedTheme) {
    button.classList.remove('blue-theme', 'green-theme', 'purple-theme');
    button.classList.add(savedTheme);
    colorSelect.value = savedTheme.replace('-theme', '');
  }
}

// Save selected theme to localStorage and apply
colorSelect.addEventListener('change', () => {
  const selectedColor = colorSelect.value + '-theme';
  button.classList.remove('blue-theme', 'green-theme', 'purple-theme');
  button.classList.add(selectedColor);
  localStorage.setItem('buttonTheme', selectedColor);
});

// Animate button with shake on click
button.addEventListener('click', () => {
  button.classList.add('shake');
  // Remove animation class after animation ends to allow repeat
  button.addEventListener('animationend', () => {
    button.classList.remove('shake');
  }, { once: true });
});

// Initialize theme on page load
loadTheme();
