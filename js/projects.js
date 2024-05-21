class ProjectsLayout {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      this.tBody = document.querySelector('.tBody'); // 테이블 본문 요소 선택
      this.spanElement = document.querySelector('.headingTxt span'); // 카운트를 표시할 span 요소 선택
      this.importRowIndex(); // 로드된 테이블 행 수를 표시하는 메서드 호출
      this.updateRowNumbers(); // 각 행의 순서를 업데이트하는 메서드 호출
      this.initializeShowMoreRows(); // 'MORE PROJECT' 버튼 클릭 시 실행되는 함수 초기화
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
      const rows = Array.from(this.tBody.querySelectorAll('.row')).reverse(); // 행들을 역순으로 배열로 변환
      rows.forEach((row, index) => {
        const numCell = row.querySelector('.cell.num p');
        if (numCell) {
          const order = (index + 1).toString().padStart(2, '0'); // 두 자리 수 형식으로 변환
          numCell.textContent = order;
        }
      });
    }
  }

  //////////* 'MORE PROJECT' 버튼 클릭 시 실행 *//////////
  initializeShowMoreRows() {
    const moreBtn = document.querySelector('.moreBtn'); // 'MORE PROJECT' 버튼 선택
    const rowsPerPage = 12; // 한 번에 보여줄 행의 개수
    let visibleRows = rowsPerPage; // 현재까지 보이는 행의 개수

    const showMoreRows = () => { // 함수를 화살표 함수로 변경
      const rows = this.tBody.querySelectorAll('.row'); // 모든 행 선택
      for (let i = visibleRows; i < visibleRows + rowsPerPage; i++) {
        if (rows[i]) {
          rows[i].style.display = 'flex'; // 다음 페이지에 해당하는 행들을 보이도록 설정
        } else {
          // 더 이상 추가할 행이 없는 경우 'MORE PROJECT' 버튼 영역을 숨김
          moreBtn.style.display = 'none';
          break;
        }
      }
      visibleRows += rowsPerPage; // 보이는 행 개수 업데이트
    };

    // 초기에는 추가 행을 보이지 않도록 설정
    const allRows = this.tBody.querySelectorAll('.row'); // tBody 내의 모든 행 선택
    for (let i = rowsPerPage; i < allRows.length; i++) {
      allRows[i].style.display = 'none'; // 추가 행을 숨김
    }

    // 'MORE PROJECT' 버튼 클릭 시 showMoreRows 함수 호출
    moreBtn.addEventListener('click', showMoreRows);
  }
}

// 클래스의 인스턴스 생성 및 내보내기
new ProjectsLayout();
export default ProjectsLayout;