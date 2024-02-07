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
    if(window.scrollY > 500){
        // 배찌 숨기기
        // gsap.to(애니메이션 처리 요소, 지속시간( 초 단위임), 옵션 추가);
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


const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, .7, {
        delay: (index + 1) * .7,
        opacity: 1
    });
});

new Swiper('.notice-line .swiper', {
    direction : 'vertical',
    autoplay : true,
    loop : true
});

new Swiper('.promotion .swiper', {
    slidesPerView : 3, //한번에 보여줄 슬라이드의 개수
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데에 보이기
    loop: true,
    autoplay: {
        delay: 5000 //5초에 한번씩 이미지가 슬라이드로 이동
    },
    pagination:{
        el:'.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable : true,
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        // 프로모션 숨기기
        promotionEl.classList.add('hide');
    }else{
        //프로모션 보여주기
        promotionEl.classList.remove('hide');
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// 둥둥 떠있는 애니메이션을 만들때,https://gsap.com/docs/v3/Eases/ 를 이용할 수 있음. 
// 우리가 원하는 형태로 제어할 수 있음.
function floatingObject(selector, delay, size){
    gsap.to(selector, random(1.5, 2.5), {
        y: size, //y축으로 어떻게 움직일 것인가.
        repeat: -1, //반복 -1은 무한 반복, 기본 값은 0
        yoyo: true,
        ease: Power1.easeInOut,
        delay : random(0, delay)
    });
};
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
    new ScrollMagic
        .Scene({
            triggerElement : spyEl, // 보여짐의 여부를 감시할 요소를 지정
            triggerHook : .8, //view가 어디에서 시작해서 어디에서 끝나는지(가장 윗부분이 0, 가장 아랫부분이 1)
            //훅에 따라 그 지점에 도달하면 setClassToggle() 함수가 실행됨.
        })
        .setClassToggle(spyEl, 'show') //내가 지정한 지점을 넘어서 화면에 보여지면 scroll-spy 뒤에 show라는 클래스가 추가 되는 거임.
        .addTo(new ScrollMagic.Controller()); //그러면 이제 controller로 조절을 하면 되는 거지.
});