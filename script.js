document.getElementById('year').textContent = new Date().getFullYear();

const badges = document.querySelectorAll('.badge');
badges.forEach((b, i) => {
  setTimeout(() => {
    b.style.transform = 'translateY(-3px)';
  }, 300 * i);
});
