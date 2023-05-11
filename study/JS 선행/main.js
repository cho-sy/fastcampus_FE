
// const boxEl = document.querySelector('.box'); // html의 .box 요소를 찾아 boxEl에 할당 (1개 찾기, 아마 전부 찾으려면 All로 찾아야할듯)

// // html 요소에 적용할 수 있는 메소드? boxEl.addEventListener(); 
// //2개 인수 추가 가능한데 첫번째 인수: 이벤트, 상황 / 두번째 인수: 핸들러, 실행할 함수
// boxEl.addEventListener('click', function () {
//   console.log('Click!');
//   boxEl.classList.add('active'); // boxEl에 클래스 메소드를 등록한다 
//   console.log(boxEl.classList.contains('active')); // 있으면 true, 없으면 false 반환 

//   boxEl.classList.remove('active');
//   console.log(boxEl.classList.contains('active'));
  
// });


//  const boxEls = document.querySelectorAll('.box'); // box요소를 다 찾겠다! 배열 형태로 받아온다
 
//  boxEls.forEach(function(boxEl,index) {
//   boxEl.classList.add(`order-${index+1}`); // 작은 따옴표가 아니라 셀틱 기호를 사용해야 중괄호변수할당 (${})이 가능해진다. html은 제로베이스가 아니므로 index에 +1추가해줌! 
//   console.log(index, boxEl);
//  });

const boxEl = document.querySelector('.box');

console.log(boxEl.textContent);

boxEl.textContent = "yeah";
console.log(boxEl.textContent);