class ScrollAnimation {
  constructor(selector) {
    // 주어진 선택자에 해당하는 모든 요소를 가져와서 scrollElements에 저장합니다.
    this.scrollElements = document.querySelectorAll(selector);
    // 초기화 함수를 호출하여 스크롤 애니메이션을 시작합니다.
    this.init();
  }

  init() {
    // 요소가 화면에 표시되는지 확인하기 위한 함수입니다.
    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      // 요소의 상단이 화면의 세로 중앙보다 위에 있는지를 확인합니다.
      return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
    };

    // 스크롤 애니메이션을 표시하는 함수입니다.
    const displayScrollElement = (element, delay) => {
      setTimeout(() => {
        // 요소에 'inView'와 'viewed' 클래스를 추가하여 애니메이션을 표시합니다.
        element.classList.add('inView', 'viewed');
      }, delay * 1000); // 지연을 초 단위로 변환하여 setTimeout에 전달합니다.
    };

    // 스크롤 애니메이션을 숨기는 함수입니다.
    const hideScrollElement = (element) => {
      // 'inView' 클래스를 제거하여 애니메이션이 사라지도록 합니다.
      element.classList.remove('inView');
    };

    // 스크롤 이벤트를 처리하는 함수입니다.
    const handleScrollAnimation = () => {
      // 모든 스크롤 요소에 대해 반복합니다.
      this.scrollElements.forEach((el) => {
        // 요소의 data-delay 속성에서 지연 값을 가져옵니다.
        const delayAttribute = el.getAttribute('data-delay');
        // 지연 값이 없으면 0으로 설정합니다.
        const delay = delayAttribute ? parseFloat(delayAttribute) : 0;
        // 이미 표시된 요소는 건너뛰고, 아닌 경우에만 처리합니다.
        if (!el.classList.contains('viewed')) {
          // 요소가 화면에 표시되는지 확인합니다.
          if (elementInView(el, 1.25)) {
            // 스크롤 요소가 화면에 표시되면 애니메이션을 표시합니다.
            displayScrollElement(el, delay);
          } else {
            // 스크롤 요소가 화면에 표시되지 않으면 애니메이션을 숨깁니다.
            hideScrollElement(el);
          }
        }
      });
    };

    // 스크롤 이벤트에 대한 쓰로틀링 함수입니다.
    const throttle = (callback, delay) => {
      let previousCall = new Date().getTime();
      return function() {
        const time = new Date().getTime();
        // 이전 호출 시간과 현재 시간 사이의 시간 간격이 지연보다 큰 경우에만 콜백을 실행합니다.
        if ((time - previousCall) >= delay) {
          previousCall = time;
          callback.apply(null, arguments);
        }
      };
    };

    // 스크롤 이벤트에 대한 쓰로틀링을 적용한 함수입니다.
    const throttledScroll = throttle(handleScrollAnimation, 200);

    // 스크롤 이벤트에 대한 리스너를 추가합니다.
    window.addEventListener('scroll', throttledScroll);

    // 초기 체크를 수행하여 페이지가 로드될 때 애니메이션을 표시합니다.
    handleScrollAnimation();
  }
}

// 페이지가 로드될 때 scrollIn 클래스를 적용한 요소에 대해 ScrollAnimation 클래스를 생성합니다.
document.addEventListener('DOMContentLoaded', function() {
  new ScrollAnimation('.scrollIn');
});

// ScrollAnimation 클래스를 내보냅니다.
export default ScrollAnimation;