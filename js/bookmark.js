class BookmarkLayout {
  constructor() {
    this.tabs = document.querySelectorAll('.tab');
    this.items = document.querySelectorAll('.listItem');
    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => this.toggleTab(tab));
    });
  }
  
  //////////* 탭을 활성화 *//////////
  toggleTab(clickedTab) {
    // 현재 활성화된 탭을 비활성화
    document.querySelector('.tab.active').classList.remove('active');
    // 클릭된 탭을 활성화
    clickedTab.classList.add('active');

    // 모든 항목을 숨김
    this.items.forEach(item => {
      item.style.display = 'none';
    });

    // 클릭된 탭의 텍스트를 대문자로 변환하여 카테고리를 가져오기
    const category = clickedTab.textContent.toUpperCase();
    // 만약 카테고리가 'ALL'이면, 모든 항목을 표시
    if (category === 'ALL') {
      this.items.forEach(item => {
        item.style.display = 'block';
      });
    } else {
      // 그렇지 않으면, 각 항목의 레이블 텍스트를 가져와서 대문자로 변환
      // 해당 카테고리를 포함하는 경우 해당 항목을 표시
      this.items.forEach(item => {
        const cate = item.querySelector('.cate').textContent.toUpperCase();
        if (cate.includes(category)) {
          item.style.display = 'block';
        }
      });
    }
  }
}

new BookmarkLayout();
export default BookmarkLayout;