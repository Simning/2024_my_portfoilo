class MainLayout {
  constructor() {
    // 페이지가 로드될 때 svg 로고 애니메이션을 초기화
    this.initSvgLogoAnimation();

    // "더 보기" 버튼을 초기화
    
    // this.initMoreButton();
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

  //////////* "더 보기" 버튼을 초기화하는 메서드 *//////////
  /* initMoreButton() {
    // DOMContentLoaded 이벤트가 발생하면 실행
    document.addEventListener("DOMContentLoaded", () => {
      // ".projItem" 클래스를 가진 요소들을 모두 선택
      const projItems = document.querySelectorAll(".projItem");
      // ".moreBtn" 클래스를 가진 요소를 선택
      const moreBtn = document.querySelector(".moreBtn");
      // 한 번에 표시할 항목의 수를 정의
      const itemsPerPage = 6;
      // 현재 보이는 항목의 수를 추적하기 위한 변수
      let visibleItemCount = itemsPerPage;

      // 처음에는 itemsPerPage만큼의 항목만 보이도록 설정
      projItems.forEach((item, index) => {
        if (index >= itemsPerPage) {
          item.style.display = "none";
        }
      });

      // "더 보기" 버튼에 클릭 이벤트를 추가
      moreBtn.addEventListener("click", () => {
        // 다음 배치에서 표시될 항목의 수를 계산
        const nextBatch = Math.min(visibleItemCount + itemsPerPage, projItems.length);
        // 다음 배치의 항목을 보이도록 설정
        for (let i = visibleItemCount; i < nextBatch; i++) {
          projItems[i].style.display = "block";
        }
        // 현재 보이는 항목의 수를 업데이트
        visibleItemCount = nextBatch;
        // 모든 항목을 로드했을 경우 "더 보기" 버튼을 숨김
        if (visibleItemCount === projItems.length) {
          moreBtn.style.display = "none";
        }
      });

      // 초기에 항목 개수가 6개 이하인 경우 "더 보기" 버튼을 숨김
      if (projItems.length <= itemsPerPage) {
        moreBtn.style.display = "none";
      }
    });
  } */
}

new MainLayout();
export default MainLayout;