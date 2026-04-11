// Language toggle
const translations = {
  en: {
    breaking: "BREAKING NEWS",
    regions: "Regions",
    latestNews: "Latest News",
    topStories: "Top Stories"
  },
  ta: {
    breaking: "விரைவு செய்தி",
    regions: "மண்டலங்கள்",
    latestNews: "சமீபத்திய செய்திகள்",
    topStories: "முக்கிய செய்திகள்"
  }
};

let currentLang = 'ta';

function switchLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang === 'ta' ? 'ta' : 'en';
  document.querySelectorAll('[data-ta]').forEach(el => {
    el.textContent = lang === 'ta' ? el.dataset.ta : el.dataset.en;
  });
}

// Set active nav link
function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.region-nav-inner a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') && path.includes(link.getAttribute('href').replace('../', ''))) {
      link.classList.add('active');
    }
  });
  if (path.endsWith('index.html') || path.endsWith('/')) {
    const homeLink = document.querySelector('.region-nav-inner a[href="index.html"], .region-nav-inner a[href="./"]');
    if (homeLink) homeLink.classList.add('active');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  // Default to Tamil
  document.querySelectorAll('.lang-btn[data-lang="ta"]').forEach(b => b.classList.add('active'));
  document.querySelectorAll('.lang-btn[data-lang="en"]').forEach(b => b.classList.remove('active'));
});
