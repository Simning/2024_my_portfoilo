
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
  const currentPath = window.location.pathname;
  // 현재 페이지의 경로에서 마지막 슬래시('/') 뒤에 있는 파일명을 추출하여 저장
  const currentFileName = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  document.querySelectorAll('.navLink').forEach(link => {
    // 각 링크의 href 속성 값을 가져와서 './'을 '/'로 대체하여 실제 경로를 가져오기
    const linkPath = link.getAttribute('href').replace('./', '/');
    // 각 링크의 경로에서 마지막 슬래시('/') 뒤에 있는 파일명을 추출하여 저장
    const linkFileName = linkPath.substring(linkPath.lastIndexOf('/') + 1);

    // 현재 페이지의 파일명과 링크의 파일명을 비교하여 조건문 실행
    if (linkFileName === currentFileName || (linkFileName === '' && currentFileName === 'index.html')) {
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
    
    // 사용자의 시스템 설정에 따라 다크 모드 버튼을 자동으로 활성화 또는 비활성화
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      darkModeBtn.classList.add('active'); // 사용자가 다크 모드로 설정한 경우 darkMode 버튼 활성화
    } else {
      lightModeBtn.classList.add('active'); // 기본 모드로 설정한 경우 lightMode 버튼 활성화
    }
    
    // 밝은 모드 버튼 클릭 시 이벤트 처리
    lightModeBtn.addEventListener('click', e => {
      lightModeBtn.classList.add('active'); // 밝은 모드 버튼에 활성 클래스 추가
      darkModeBtn.classList.remove('active'); // 어두운 모드 버튼의 활성 클래스 제거
      document.body.classList.remove('dark-mode'); // 다크 모드 클래스 제거
    });
    
    // 어두운 모드 버튼 클릭 시 이벤트 처리
    darkModeBtn.addEventListener('click', e => {
      darkModeBtn.classList.add('active'); // 어두운 모드 버튼에 활성 클래스 추가
      lightModeBtn.classList.remove('active'); // 밝은 모드 버튼의 활성 클래스 제거
      document.body.classList.add('dark-mode'); // 다크 모드 클래스 추가
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