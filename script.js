// ===== Smooth Scroll to Section =====
function scrollToSection(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

// ===== Reveal Sections on Scroll =====
function revealOnScroll() {
  const sections = document.querySelectorAll('.reveal-section');
  const windowHeight = window.innerHeight;
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 100;
    
    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add('visible');
    }
  });
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
  // Initial check for visible sections
  revealOnScroll();
  
  // Listen for scroll events
  window.addEventListener('scroll', revealOnScroll);
  
  // Add staggered animation to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 100}ms`;
  });
});

// ===== Header scroll effect =====
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  
  if (window.scrollY > 100) {
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
  } else {
    header.style.boxShadow = 'none';
  }
});
document.getElementById('year').textContent = new Date().getFullYear();

const badges = document.querySelectorAll('.badge');
badges.forEach((b, i) => {
  setTimeout(() => {
    b.style.transform = 'translateY(-3px)';
  }, 300 * i);
});