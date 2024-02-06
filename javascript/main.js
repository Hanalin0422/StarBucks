const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

// 화면을 스크롤 할때마다 나타나는 이벤트에 부하를 주어 일정 시간 간격으로 함수가 실행되게 해줌
// _.throttle(함수, 시간)으로 사용
window.addEventListener('scroll', _.throttle(function(){
    console.log(scrollY);
    if(window.scrollY > 500){
        // 배찌 숨기기
        // gsap.to(애니메이션 처리 요소, 지속시간, 옵션 추가);
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
    }else{
        // 배찌 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });
    }
}, 500));