class HeaderManager {
  constructor() {
    this.modeWraps = document.querySelectorAll('.modeWrap');
    this.lightModeBtns = Array.from(this.modeWraps).map(modeWrap => modeWrap.querySelector('.light'));
    this.darkModeBtns = Array.from(this.modeWraps).map(modeWrap => modeWrap.querySelector('.dark'));

    this.setupNavigation();
    this.setupDarkMode();
    this.setupHeaderScroll();
  }

  // 내비게이션 설정
  setupNavigation() {
    const currentFileName = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);

    document.querySelectorAll('.navLink').forEach(link => {
      const linkPath = link.getAttribute('href').replace('./', '/');
      const linkFileName = linkPath.substring(linkPath.lastIndexOf('/') + 1);
      const isActive = linkFileName === currentFileName || (linkFileName === '' && currentFileName === 'index.html') || (link.textContent.trim().toLowerCase() === 'projects' && (currentFileName === 'projects.html' || currentFileName.startsWith('projView')));

      link.classList.toggle('active', isActive);
    });
  }

  // 다크 모드 설정
  setupDarkMode() {
    if (!this.modeWraps.length) return;

    const savedMode = localStorage.getItem('color-mode') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    this.setMode(savedMode);
    
    this.lightModeBtns.forEach(btn => btn.addEventListener('click', () => this.setMode('light')));
    this.darkModeBtns.forEach(btn => btn.addEventListener('click', () => this.setMode('dark')));
  }

  // 모드 설정
  setMode(mode) {
    const isDarkMode = mode === 'dark';

    if (isDarkMode) {
      this.darkModeBtns.forEach(btn => btn.classList.add('active'));
      this.lightModeBtns.forEach(btn => btn.classList.remove('active'));
      document.body.classList.add('dark-mode');
    } else {
      this.lightModeBtns.forEach(btn => btn.classList.add('active'));
      this.darkModeBtns.forEach(btn => btn.classList.remove('active'));
      document.body.classList.remove('dark-mode');
    }

    localStorage.setItem('color-mode', mode);
  }

  // 헤더 스크롤 제어
  setupHeaderScroll() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        header.style.top = `-${headerHeight}px`;
      } else {
        header.style.top = '0';
      }

      lastScrollTop = currentScroll;
    });
  }
}

new HeaderManager();
export default HeaderManager;