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
  }
  else
  {
    //배지 보이기
    //badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    }); 
  }
}, 300));

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

