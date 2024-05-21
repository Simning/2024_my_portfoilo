// portfolio.js
import HeaderManager from './header.js';
import MainLayout from './main.js';
import ProjectsLayout from './projects.js';
import BookmarkLayout from './bookmark.js';
import FooterManager from './footer.js';

new HeaderManager();
new MainLayout();
new ProjectsLayout();
new BookmarkLayout();
new FooterManager();

// 사용자의 환경 설정을 감지하여 다크 모드 클래스 추가
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.add('dark-mode');
}