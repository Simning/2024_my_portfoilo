
/*
// Header를 불러오는 함수
function loadHeader() {
  // header.html 파일을 가져와서 현재 페이지에 삽입
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('headerPlaceholder').innerHTML = data;
      // Header를 로드한 후 dark mode 초기화 함수 호출
      initializeDarkMode();
    })
    .catch(error => console.error('Error loading header:', error)); // 오류 처리
}
*/

class HeaderManager {
  constructor() {
    window.addEventListener('DOMContentLoaded', () => {
      this.setupNavigation();
      this.setupDarkMode();
      this.setupHeaderScroll();
    });
  }

  /////* 페이지 내비게이션을 설정 */////
  setupNavigation() {
    const path = window.location.pathname;
    const navItems = document.querySelectorAll('.gnbMenu li');
    console.log(path);
  
    navItems.forEach(item => {
      const itemPath = item.querySelector('a').getAttribute('href');
      if (itemPath === path || itemPath === '.' + path) {
        item.classList.add('active');
        console.log('active');
      } else {
        item.classList.remove('active');
        console.log('remove');
      }
    });
  }

  /////* 다크 모드 설정 기능을 초기화 */////
  setupDarkMode() {
    const modeWrap = document.querySelector('.modeWrap');
    if (!modeWrap) return; // 요소가 존재하지 않으면 함수 종료

    const lightModeBtn = modeWrap.querySelector('.light');
    const darkModeBtn = modeWrap.querySelector('.dark');

    // 밝은 모드 버튼 클릭 시 이벤트 처리
    lightModeBtn.addEventListener('click', e => {
      e.preventDefault();
      lightModeBtn.classList.add('active'); // 밝은 모드 버튼에 활성 클래스 추가
      darkModeBtn.classList.remove('active'); // 어두운 모드 버튼의 활성 클래스 제거
      // 여기에 다크모드 해제 로직 추가
    });

    // 어두운 모드 버튼 클릭 시 이벤트 처리
    darkModeBtn.addEventListener('click', e => {
      e.preventDefault();
      darkModeBtn.classList.add('active'); // 어두운 모드 버튼에 활성 클래스 추가
      lightModeBtn.classList.remove('active'); // 밝은 모드 버튼의 활성 클래스 제거
      // 여기에 다크모드 활성화 로직 추가
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

new HeaderManager();
export default HeaderManager;