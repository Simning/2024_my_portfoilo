// portfolio.js
import HeaderManager from './_header.js';
import mainLayout from './_main.js';
import TabManager from './_archive.js';
import FooterManager from './_footer.js';

new HeaderManager();
new mainLayout();
new TabManager();
new FooterManager();

// 사용자의 환경 설정을 감지하여 다크 모드 클래스 추가
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode');
}