class HeaderManager {
  constructor() {
    this.modeWraps = document.querySelectorAll('.modeWrap');
    this.lightModeBtns = Array.from(this.modeWraps).map(modeWrap => modeWrap.querySelector('.light'));
    this.darkModeBtns = Array.from(this.modeWraps).map(modeWrap => modeWrap.querySelector('.dark'));

    this.setupNavigation();
    this.setupDarkMode();
    this.setupHeaderScroll(); 
  }

  //////////* 네비게이션 메서드 *//////////
  setupNavigation() {
    // 현재 페이지의 파일 이름을 가져옴
    const currentFileName = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1);

    // 모든 .navLink 요소들을 순회
    document.querySelectorAll('.navLink').forEach(link => {
      // 링크 경로를 얻어 './'를 '/'로 대체
      const linkPath = link.getAttribute('href').replace('./', '/');
      // 링크 파일 이름을 가져옴
      const linkFileName = linkPath.substring(linkPath.lastIndexOf('/') + 1);
      // 현재 링크가 활성화 상태인지 확인
      const isActive = linkFileName === currentFileName || 
                      linkFileName === '' ||
                      (link.textContent.trim().toLowerCase() === 'projects' && 
                      (currentFileName === 'projects.html' || currentFileName.startsWith('projView')));

      // 링크에 'active' 클래스를 토글
      link.classList.toggle('active', isActive);
    });
  }

  //////////* 다크모드 메서드 *//////////
  setupDarkMode() {
    // .modeWrap 요소가 없는 경우 리턴
    if (!this.modeWraps.length) return;

    // 로컬 스토리지에서 저장된 모드를 가져오거나 기본 모드를 설정
    const savedMode = localStorage.getItem('color-mode') || 
                      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    // 저장된 모드로 설정
    this.setMode(savedMode);
    
    // 각 라이트 모드 버튼에 클릭 이벤트를 추가
    this.lightModeBtns.forEach(btn => btn.addEventListener('click', () => this.setMode('light')));
    // 각 다크 모드 버튼에 클릭 이벤트를 추가
    this.darkModeBtns.forEach(btn => btn.addEventListener('click', () => this.setMode('dark')));
  }

  //////////* 다크모드 설정 *//////////
  setMode(mode) {
    const isDarkMode = mode === 'dark';

    // 다크 모드인 경우
    if (isDarkMode) {
      this.darkModeBtns.forEach(btn => btn.classList.add('active'));
      this.lightModeBtns.forEach(btn => btn.classList.remove('active'));
      document.body.classList.add('dark-mode');
    } else {
      this.lightModeBtns.forEach(btn => btn.classList.add('active'));
      this.darkModeBtns.forEach(btn => btn.classList.remove('active'));
      document.body.classList.remove('dark-mode');
    }

    // 로컬 스토리지에 모드를 저장
    localStorage.setItem('color-mode', mode);
  }

  // 헤더 스크롤 제어 함수
  setupHeaderScroll() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    const slideDownNav = document.querySelector('.slideDownNav');
    const toggleMenu = document.querySelector('.toggleMenu');

    window.addEventListener('scroll', () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      // 스크롤이 내려가는 경우
      if (currentScroll > lastScrollTop) {
        // 스크롤 다운 시 헤더 숨김
        header.style.top = `-${headerHeight}px`;
      } else if (currentScroll > 0) {
        // 스크롤이 올라가고 스크롤 위치가 0보다 큰 경우 헤더 보임
        header.style.top = '0';
      }

      // 슬라이드다운 내비게이션이 열려 있는 경우 닫음
      if (slideDownNav.classList.contains('open')) {
        slideDownNav.classList.remove('open');
        slideDownNav.classList.add('close');
      }
      // 토글 메뉴가 열려 있는 경우 닫음
      if (toggleMenu.classList.contains('open')) {
        toggleMenu.classList.remove('open');
        toggleMenu.classList.add('close');
      }

      // 마지막 스크롤 위치를 업데이트
      lastScrollTop = currentScroll;
    });
  }
}

new HeaderManager();
export default HeaderManager;