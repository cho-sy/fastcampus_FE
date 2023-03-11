const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchInputEl.focus(); // searchEl의 요소를 클릭하면 InputEl을 포커스해라 
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused'); // focused 라는 클래스 추가, css 선택자로 사용 가능해짐
  searchInputEl.setAttribute('placeholder', '통합검색'); //html의 속성을 지정해줌 setAttribut(속성이름, 속성명)
})

searchInputEl.addEventListener('blur', function(){ // focus가 해제 되면 
  searchEl.classList.remove('focused'); // focused 라는 클래스 추가, css 선택자로 사용 가능해짐
  searchInputEl.setAttribute('placeholder', ''); //html의 속성을 지정해줌 setAttribut(속성이름, 속성명)
})