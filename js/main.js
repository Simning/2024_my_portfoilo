class MainLayout {
  constructor() {
    // 페이지가 로드될 때 svg 로고 애니메이션을 초기화
    this.initSvgLogoAnimation();
  }

  //////////* svg 로고 애니메이션을 초기화하는 메서드 *//////////
  initSvgLogoAnimation() {
    // DOMContentLoaded 이벤트가 발생하면 실행
    window.addEventListener('DOMContentLoaded', () => {
      // .largeLogo 클래스를 가진 요소를 찾기
      const logo = document.querySelector('.largeLogo');
      // 만약 로고 요소가 존재하면,
      if (logo) {
        // 로고 요소에 'on' 클래스를 추가
        logo.classList.add('on');
      }
    });
  }
}

new MainLayout();
export default MainLayout;