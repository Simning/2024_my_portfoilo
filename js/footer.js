class FooterManager {
  // 생성자 함수
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      this.scrollToTop(); // 맨 위로 스크롤하는 기능 활성화
      this.initializeFooterHeight(); // 푸터 높이 초기화 및 리사이즈 이벤트 핸들러 등록
    });
  }

  // 맨 위로 스크롤하는 기능
  scrollToTop() {
    const topBtn = document.querySelector('footer .topBtn'); // 푸터 안의 topBtn 선택
    if (topBtn) {
      // 맨 위로 이동 버튼 클릭 시 이벤트 처리
      topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 부드러운 스크롤로 맨 위로 이동
      });
    }
  }

  // 요소의 margin-bottom 값을 설정하여 푸터의 높이에 맞추는 메서드
  setMarginBottom() {
    const footer = document.getElementById('footer'); // 푸터 요소 선택
    const footerMargins = document.querySelectorAll('.footerMargin'); // 모든 footerMargin 클래스 선택
    if (footer && footerMargins.length > 0) {
      const footerHeight = footer.offsetHeight; // 푸터 높이 측정
      footerMargins.forEach(footerMargin => {
        footerMargin.style.marginBottom = `${footerHeight}px`; // footerMargin의 margin-bottom 값 설정
      });
    }
  }

  // 푸터의 높이를 초기화하고 윈도우 리사이즈 이벤트에 대한 핸들러를 등록하는 메서드
  initializeFooterHeight() {
    this.setMarginBottom(); // 초기화 시 footerMargin 요소의 margin-bottom 값 설정
    window.addEventListener('resize', () => this.setMarginBottom()); // 윈도우 리사이즈 이벤트 핸들러 등록
  }
}

new FooterManager();
export default FooterManager;