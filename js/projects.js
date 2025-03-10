class ProjectsLayout {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      this.tBody = document.querySelector('.tBody'); // 테이블 본문 요소 선택
      this.spanElement = document.querySelector('.headingTxt span'); // 카운트를 표시할 span 요소 선택
      this.importRowIndex(); // 로드된 테이블 행 수를 표시하는 메서드 호출
      this.updateRowNumbers(); // 각 행의 순서를 업데이트하는 메서드 호출
      this.initializeShowMoreRows(); // 'MORE PROJECT' 버튼 클릭 시 실행되는 함수 호출
    });
  }

  //////////* 로드된 테이블 행 수를 표시하는 메서드 *//////////
  importRowIndex() {
    if (this.tBody && this.spanElement) {
      const count = this.tBody.querySelectorAll('.row').length; // 테이블 본문 내의 행 수 측정
      this.spanElement.textContent = `( ${count} )`; // 행 수를 표시할 span 요소에 적용하여 표시
    }
  }

  //////////* 각 행의 순서를 업데이트하는 메서드 *//////////
  updateRowNumbers() {
    if (this.tBody) {
      const rows = this.tBody.querySelectorAll('.row');
      rows.forEach((row, index) => {
        const numCell = row.querySelector('.cell.num p');
        if (numCell) {
          const order = (rows.length - index).toString().padStart(2, '0'); // 두 자리 수 형식으로 변환
          numCell.textContent = order;
        }
      });
    }
  }

  //////////* 'MORE PROJECT' 버튼 클릭 시 실행 *//////////
  initializeShowMoreRows() {
    const moreBtn = document.querySelector('.moreBtn');
    const rowsPerPage = 12; // 한 번에 보여줄 행의 개수
    let visibleRows = rowsPerPage; // 현재까지 보이는 행의 개수

    const showMoreRows = () => {
      const rows = this.tBody.querySelectorAll('.row'); // 모든 행 선택
      const isSmallScreen = window.matchMedia("(max-width: 1024px)").matches;

      for (let i = visibleRows; i < visibleRows + rowsPerPage; i++) {
        if (rows[i]) {
          rows[i].style.display = isSmallScreen ? 'block' : 'grid';
        } else {
          break;
        }
      }
      visibleRows += rowsPerPage; // 보이는 행 개수 업데이트

      // 모든 행이 보이는 경우 'MORE PROJECT' 버튼 영역을 숨김
      if (visibleRows >= rows.length) {
        moreBtn.style.display = 'none';
      }
    };

    // 초기에는 추가 행을 보이지 않도록 설정
    const allRows = this.tBody.querySelectorAll('.row');
    for (let i = rowsPerPage; i < allRows.length; i++) {
      allRows[i].style.display = 'none';
    }

    moreBtn.addEventListener('click', showMoreRows);
  }
}

new ProjectsLayout();
export default ProjectsLayout;