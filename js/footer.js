
class FooterManager {
  //////////* Scroll to top *//////////
  constructor() {
    this.scrollToTop();
  }

  scrollToTop() {
    const topBtn = document.querySelector('footer .topBtn');
  
    // 맨 위로 이동 버튼 클릭 시 이벤트 처리
    topBtn.addEventListener('click', () => {
      window.scrollTo({top: 0, behavior: 'smooth'}); // 부드러운 스크롤로 맨 위로 이동
    });
  }
}

new FooterManager();
export default FooterManager;