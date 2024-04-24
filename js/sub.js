// about page

const projList = document.querySelector('#about .wrapper .rightCont .flexArea .rightArea ul.projList');
const moreBtn = document.querySelector('#about .wrapper .rightCont .flexArea .rightArea .moreBtn');
const projItemCount = projList.querySelectorAll('li').length;

// 보여줄 projList의 개수를 정의
const itemsToShow = 10;

// projList에 보여질 항목이 10개 초과인 경우 moreBtn을 표시
if (projItemCount > itemsToShow) {
    moreBtn.style.display = 'flex';
} else {
    moreBtn.style.display = 'none';
}

// moreBtn을 클릭했을 때 추가 항목을 표시하는 함수
moreBtn.addEventListener('click', function() {
    // projList의 자식 요소(li)를 가져옵니다.
    const projListItems = projList.querySelectorAll('li');

    // 추가할 항목의 시작과 끝 인덱스를 계산합니다.
    const startIdx = projItemCount;
    const endIdx = projItemCount + itemsToShow;

    // projList에 추가할 항목을 생성하고 추가합니다.
    for (let i = startIdx; i < endIdx && i < projListItems.length; i++) {
        projListItems[i].style.display = 'flex';
    }

    // projList의 자식 요소(li) 개수를 다시 계산합니다.
    const newProjItemCount = projList.querySelectorAll('li').length;

    // 추가된 항목이 없는 경우 moreBtn을 숨깁니다.
    if (newProjItemCount <= endIdx) {
        moreBtn.style.display = 'none';
    }
});

console.log('hhdhdfhdh')