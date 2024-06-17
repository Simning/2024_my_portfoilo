document.addEventListener('DOMContentLoaded', () => {
  // HTML 요소 선택: 각 요소를 변수에 저장하여 나중에 사용할 수 있도록 함
  const heroImage = document.getElementById('heroImage');
  const projectTitle = document.getElementById('projectTitle');
  const projectOverview = document.getElementById('projectOverview');
  const projectClient = document.getElementById('projectClient');
  const projectCategory = document.getElementById('projectCategory');
  const projectYear = document.getElementById('projectYear');
  const projectImages = document.getElementById('projectImages');

  // URL 파라미터에서 프로젝트 ID를 가져옴
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');

  // JSON 파일에서 프로젝트 데이터 로드
  fetch('../data/projects.json')
    .then(response => response.json()) // 응답을 JSON 형식으로 변환
    .then(data => {
      // JSON 데이터에서 특정 ID를 가진 프로젝트를 찾음
      const project = data.find(item => item.id === projectId);

      // 프로젝트가 존재하면, 해당 데이터를 HTML 요소에 주입
      if (project) {

        // 프로젝트 제목 설정, 영문 확인 및 korLs 클래스 삭제
        projectTitle.textContent = project.title;
        
        if (/^[a-zA-Z\s]+$/.test(project.title)) {
          projectTitle.classList.remove('korLs');
        }

        // 프로젝트 개요 설정
        projectOverview.textContent = project.overview;
        projectOverview.innerHTML = project.overview.replace(/\n/g, '<div class="space"></div>'); // 개행 문자를 <br> 태그로 변환

        // 프로젝트 클라이언트 설정
        projectClient.textContent = project.client;

        // 프로젝트 카테고리 설정
        projectCategory.textContent = project.category;

        // 프로젝트 연도 설정
        projectYear.textContent = project.year;

        // 프로젝트 이미지 배열을 순회하여 각 이미지를 추가
        project.images.forEach(image => {
          const imgElement = document.createElement('img');
          imgElement.src = `../src/projects/${project.id}/${image.src}`; // 이미지 경로 설정
          imgElement.alt = `${project.title} image`; // 이미지 대체 텍스트 설정
          if (image.type === 'full') {
            imgElement.classList.add('fullImage');
          } else if (image.type === 'half') {
            imgElement.classList.add('halfImage');
          }
          projectImages.appendChild(imgElement); // projectImages 요소에 이미지 추가
        });
      } else {
        console.error('Project not found');
      }
    })
    .catch(error => {
      console.error('Error loading project data:', error);
    });
});