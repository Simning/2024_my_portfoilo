class MainLayout {
  constructor() {
    this.initSvgLogoAnimation();
  }

  //////////* svg 로고 애니메이션을 초기화하는 메서드 *//////////
  initSvgLogoAnimation() {
    window.addEventListener('DOMContentLoaded', () => {
      const logo = document.querySelector('.largeLogo');

      if (logo) {
        logo.classList.add('on');
      }
    });
  }
}

new MainLayout();
export default MainLayout;