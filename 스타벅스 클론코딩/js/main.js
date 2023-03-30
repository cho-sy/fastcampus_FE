const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus(); // searchEl의 요소를 클릭하면 InputEl을 포커스해라 
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused'); // focused 라는 클래스 추가, css 선택자로 사용 가능해짐
  searchInputEl.setAttribute('placeholder', '통합검색'); //html의 속성을 지정해줌 setAttribut(속성이름, 속성명)
});

searchInputEl.addEventListener('blur', function(){ // focus가 해제 되면 
  searchEl.classList.remove('focused'); // focused 라는 클래스 추가, css 선택자로 사용 가능해짐
  searchInputEl.setAttribute('placeholder', ''); //html의 속성을 지정해줌 setAttribut(속성이름, 속성명)
});


const toTopEl = document.querySelector('#to-top');

const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle( function () {
  //console.log(window.scrollY);
  if(window.scrollY > 500){
    // 배지 숨기기 
    //badgeEl.style.display = 'none';
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    }); 

    //top 버튼 보이기
    gsap.to(toTopEl, 
      .2, 
    {
      x: 0 //버튼이 다시 나타나도록 
    }
  );
  }
  else
  {
    //배지 보이기
    //badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    }); 

    //top 버튼 숨기기 
    gsap.to( // 굳이 el변수에 할당하지 않아도 선택자로도 찾을 수는 있음
      toTopEl, 
      .2, 
      {
        x: 100 //버튼이 오른쪽으로 숨겨지도록 하기
      }
    );
  }
}, 300));


toTopEl.addEventListener('click', ()=>{
  gsap.to(window, .7, {
    scrollTo: 0 // 스크롤을 0으로 지정해주겠단 뜻
  });
})


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index+1)*.7,
    opacity: 1
  })
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', // 수직으로 스와이프
  autoplay: true, // 알아서 자동으로 재생
  loop: true // 반복 여부 설정
});

new Swiper('.promotion .swiper-container',{
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복 여부 설정 
  autoplay: {
    delay: 5000 // 5초 
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부 
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,//하나의 화면에 몇개의 슬라이드를 보일건지
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function() {
  isHidePromotion = !isHidePromotion; // false가 되어있다면 true, true가 되어있다면 false 
  if(isHidePromotion)
  {
    // 숨김 처리 
    promotionEl.classList.add('hide'); // hide라는 클래스를 생성함
  }
  else{

    // 다시 보이게 하기
    promotionEl.classList.remove('hide');
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 선택자 
    random(1.5, 2.5), // 애니메이션 동작 시간 
    { // 옵션 
      y: size,
      repeat: -1, // 무한 반복
      yoyo: true, // 한번 재생된 애니메이션을 다시 되돌림
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach((spyEl)=> {
  new ScrollMagic
  .Scene({
    //내가 감시하고 있는 하나의 section element= spyEl
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정 
    triggerHook: .8 // 세로의 뷰포트 기준 (맨 위가 0, 맨 아래가 1) 0.8 지점에 "걸리면" trigger가 동작, 아래의 함수 동작시킴
  })
  .setClassToggle(spyEl, 'show') 
  .addTo(new ScrollMagic.Controller());
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // year만 따오기 