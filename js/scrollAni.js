class ScrollAnimation {
  constructor(selector, eventCallback = null) {
    this.scrollElements = document.querySelectorAll(selector);
    this.eventCallback = eventCallback;
    this.init();
  }

  init() {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          this.handleElementInView(target);
          observer.unobserve(target); // 한 번 처리된 요소는 관찰 중지
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0
    });

    this.scrollElements.forEach(el => observer.observe(el));
  }

  handleElementInView(element) {
    // 요소에 'inView'와 'viewed' 클래스 추가
    element.classList.add('inView', 'viewed');
    
    // 딜레이 클래스가 존재하면 추가
    const delayClass = element.dataset.delayClass;
    if (delayClass) {
      element.classList.add(delayClass);
    }

    // 이벤트 콜백 실행
    if (this.eventCallback) {
      this.eventCallback(element);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  new ScrollAnimation('.scrollIn');
});

export default ScrollAnimation;