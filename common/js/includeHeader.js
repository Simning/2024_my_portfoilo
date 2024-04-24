// 헤더를 가져와서 현재 HTML에 삽입하는 함수
function includeHeader() {
    // 헤더가 있는 외부 HTML 파일의 경로를 지정
    fetch('/common/header.html')
        .then(response => response.text())
        .then(data => {
            // 외부 HTML의 내용을 현재 HTML에 삽입
            document.getElementById('headerContainer').innerHTML = data; 
        })
        .catch(error => console.error('헤더를 가져오는 동안 에러가 발생했습니다:', error));
}

// 페이지 로드 후 헤더를 import
document.addEventListener('DOMContentLoaded', includeHeader);