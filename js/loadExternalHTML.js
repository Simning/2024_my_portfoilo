/*
// 외부 HTML 파일의 경로
const externalHTMLPath = 'externalHead.html';

// 외부 HTML 파일을 가져와서 현재 문서의 head 태그에 삽입하는 함수
function loadExternalHTML() {
  fetch(externalHTMLPath)
    .then(response => response.text())
    .then(html => {
      const parser = new DOMParser();
      const externalDoc = parser.parseFromString(html, 'text/html');
      const headContents = externalDoc.querySelector('head').innerHTML;
      document.head.insertAdjacentHTML('beforeend', headContents);
    })
    .catch(error => console.error('Error loading external HTML:', error));
}

// 문서가 로드된 후 외부 HTML 파일 불러오기
document.addEventListener('DOMContentLoaded', loadExternalHTML);
*/