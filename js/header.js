class HeaderManager {
  constructor() {
    this.setupNavigation();
    this.setupDarkMode();
    this.setupHeaderScroll();
  }

  /////* 페이지 내비게이션을 설정 */////
  setupNavigation() {
    const currentPath = window.location.pathname;
    // 현재 페이지의 경로에서 마지막 슬래시('/') 뒤에 있는 파일명을 추출하여 저장
    const currentFileName = currentPath.substring(currentPath.lastIndexOf('/') + 1);

    document.querySelectorAll('.navLink').forEach(link => {
      // 각 링크의 href 속성 값을 가져와서 './'을 '/'로 대체하여 실제 경로를 가져오기
      const linkPath = link.getAttribute('href').replace('./', '/');
      // 각 링크의 경로에서 마지막 슬래시('/') 뒤에 있는 파일명을 추출하여 저장
      const linkFileName = linkPath.substring(linkPath.lastIndexOf('/') + 1);

      // 현재 페이지의 파일명과 링크의 파일명을 비교하여 조건문 실행
      if (
        linkFileName === currentFileName || 
        (linkFileName === '' && currentFileName === 'index.html') || 
        (link.textContent.trim().toLowerCase() === 'projects' && (currentFileName === 'projects.html' || currentFileName.startsWith('projView')))
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /////* 다크 모드 설정 기능을 초기화 */////
  setupDarkMode() {
    const modeWrap = document.querySelector('.modeWrap');
    if (!modeWrap) return; // 요소가 존재하지 않으면 함수 종료
    
    const lightModeBtn = modeWrap.querySelector('.light');
    const darkModeBtn = modeWrap.querySelector('.dark');

    // 로컬 스토리지에서 저장된 모드 가져오기
    const savedMode = localStorage.getItem('color-mode');
    
    if (savedMode) {
      if (savedMode === 'dark') {
        darkModeBtn.classList.add('active');
        document.body.classList.add('dark-mode');
      } else {
        lightModeBtn.classList.add('active');
        document.body.classList.remove('dark-mode');
      }
    } else {
      // 사용자의 시스템 설정에 따라 초기 모드 설정
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darkModeBtn.classList.add('active'); // 사용자가 다크 모드로 설정한 경우 darkMode 버튼 활성화
        document.body.classList.add('dark-mode');
      } else {
        lightModeBtn.classList.add('active'); // 기본 모드로 설정한 경우 lightMode 버튼 활성화
        document.body.classList.remove('dark-mode');
      }
    }

    // 밝은 모드 버튼 클릭 시 이벤트 처리
    lightModeBtn.addEventListener('click', e => {
      lightModeBtn.classList.add('active'); // 밝은 모드 버튼에 활성 클래스 추가
      darkModeBtn.classList.remove('active'); // 어두운 모드 버튼의 활성 클래스 제거
      document.body.classList.remove('dark-mode'); // 다크 모드 클래스 제거
      localStorage.setItem('color-mode', 'light'); // 로컬 스토리지에 밝은 모드 저장
    });
    
    // 어두운 모드 버튼 클릭 시 이벤트 처리
    darkModeBtn.addEventListener('click', e => {
      darkModeBtn.classList.add('active'); // 어두운 모드 버튼에 활성 클래스 추가
      lightModeBtn.classList.remove('active'); // 밝은 모드 버튼의 활성 클래스 제거
      document.body.classList.add('dark-mode'); // 다크 모드 클래스 추가
      localStorage.setItem('color-mode', 'dark'); // 로컬 스토리지에 어두운 모드 저장
    });
  }

  /////* 헤더 스크롤 제어 기능을 초기화 */////
  setupHeaderScroll() {
    let lastScrollTop = 0;
    const headerHeight = document.querySelector('header').offsetHeight;

    window.addEventListener('scroll', () => {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        document.querySelector('header').style.top = `-${headerHeight}px`; // 숨김
      } else {
        document.querySelector('header').style.top = "0"; // 표시
      }

      lastScrollTop = currentScroll;
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  new HeaderManager();
});

export default HeaderManager;