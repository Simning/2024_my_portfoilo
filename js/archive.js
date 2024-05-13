class TabManager {
  constructor() {
    this.tabs = document.querySelectorAll('.tab');
    this.items = document.querySelectorAll('.item');

    this.tabs.forEach(tab => {
      tab.addEventListener('click', () => this.toggleTab(tab));
    });
  }

  toggleTab(clickedTab) {
    document.querySelector('.tab.active').classList.remove('active');
    clickedTab.classList.add('active');

    this.items.forEach(item => {
      item.style.display = 'none';
    });

    const category = clickedTab.textContent.toUpperCase();
    if (category === 'ALL') {
      this.items.forEach(item => {
        item.style.display = 'block';
      });
    } else {
      this.items.forEach(item => {
        const label = item.querySelector('.label').textContent.toUpperCase();
        if (label.includes(category)) {
          item.style.display = 'block';
        }
      });
    }
  }
}

new TabManager(); // 탭 관리기능을 초기화합니다.
export default TabManager;