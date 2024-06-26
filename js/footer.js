class FooterManager {
  // 생성자 함수
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      this.scrollToTop();
      this.initializeFooterHeight();
    });
  }

  // 맨 위로 스크롤하는 기능
  scrollToTop() {
    const topBtn = document.querySelector('footer .topBtn');
    if (topBtn) {
      // 맨 위로 이동 버튼 클릭 시 이벤트 처리
      topBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  // 요소의 margin-bottom 값을 설정하여 푸터의 높이에 맞추는 메서드
  setMarginBottom() {
    const footer = document.getElementById('footer');
    const footerMargins = document.querySelectorAll('.footerMargin');
    if (footer && footerMargins.length > 0) {
      const footerHeight = footer.offsetHeight;
      footerMargins.forEach(footerMargin => {
        footerMargin.style.marginBottom = `${footerHeight}px`;
      });
    }
  }

  // 푸터의 높이를 초기화하고 윈도우 리사이즈 이벤트에 대한 핸들러를 등록하는 메서드
  initializeFooterHeight() {
    this.setMarginBottom();
    window.addEventListener('resize', () => this.setMarginBottom());
  }
}

new FooterManager();
export default FooterManager;