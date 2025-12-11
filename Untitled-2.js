// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Badge animation on load
const badges = document.querySelectorAll('.badge');
badges.forEach((b, i) => {
  setTimeout(() => {
    b.style.transform = 'translateY(-3px)';
  }, 300 * i);
});