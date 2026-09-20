// Resume preview modal (plain client-side, no platform APIs needed)
  document.getElementById('resumeBtn').addEventListener('click', () => {
    document.getElementById('resumeModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
  document.getElementById('resumeModalClose').addEventListener('click', closeResumeModal);
  document.getElementById('resumeModalBackdrop').addEventListener('click', closeResumeModal);
  function closeResumeModal(){
    document.getElementById('resumeModal').style.display = 'none';
    document.body.style.overflow = '';
  }

  // Theme toggle
  const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  function currentTheme(){
    const set = root.getAttribute('data-theme');
    if(set) return set;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  function updateIcon(){ toggle.textContent = currentTheme() === 'dark' ? '🌙' : '☀️'; }
  toggle.addEventListener('click', () => {
    root.setAttribute('data-theme', currentTheme() === 'dark' ? 'light' : 'dark');
    updateIcon();
  });
  updateIcon();

  // Hero typing bio
  const bioText = "I'm a Computer Science (AI) undergraduate who builds full-stack web apps with the MERN stack, focused on crafting clean, usable React.js frontends.";
  const bioEl = document.getElementById('heroBio');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion){
    bioEl.textContent = bioText;
  } else {
    let i = 0;
    function typeStep(){
      if(i <= bioText.length){
        bioEl.innerHTML = bioText.slice(0, i) + '<span class="cursor"></span>';
        i++;
        setTimeout(typeStep, 16);
      }
    }
    typeStep();
  }
