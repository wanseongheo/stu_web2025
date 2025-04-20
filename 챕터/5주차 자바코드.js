//처리할 케이스가 많은 경우 switch문이 편리하다.

let subject = prompt("신청할 과목을 선택하세요. 1-HTML, 2-CSS, 3-Javascript");

if (subject !== null) {
  switch(subject) {  //스위치문 사용
    case "1" : document.write("HTML을 신청했습니다.");
      break;
    case "2" : document.write("CSS를 신청했습니다.");
      break;
    case "3" : document.write("Javascript를 신청했습니다.");
      break;
    default : document.write("잘못 입력했습니다. 다시 입력해 주세요.")
  }
}

================================================================================

/*for in 문 사용해서 객체 값 가져오기
for in 문은 객체의 key 값을 가져온다
key 값을 알고싶다면(ex: 배열의 1번째 값 등), key를 사용해서 객체 값에 접근 가능하다.
*/
const gitBook = {
  title : "깃&깃허브 입문",
  pubDate : "2019-12-06",
  pages : 272,
  finished : true
}

for(key in gitBook) {
  document.write(`${key} : ${gitBook[key]}<br>`);
}

================================================================================
  
/* 함수와 매개변수 선언
*/
function calcSum(n) {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

let number = parseInt(prompt("몇까지 더할까요?"));

console.log(`1부터 ${number}까지 더하면 ${calcSum(number)}입니다.`);



//콜백함수 : 다른함수의 인자로 사용되는 함수

const bttn = document.querySelector("button");     // 버튼 요소 가져옴

function display() {
  alert("클릭했습니다.");
}

bttn.addEventListener("click", display);          // 버튼 클릭하면 display 함수 실행 , 뒤에 괄호를 안붙인다 !!


================================================================================

//setInterval() 셋인터벌 함수는 웹종료전까지 계속실행된다.
//clearInterval() 클리어인터벌 함수는 인터벌 종료 
let counter = 0;

let timer = setInterval(() => { //timer 시작
  console.log("안녕하세요?")
  counter++;      // 안녕하세요? 표시되면 counter++

  if (counter === 5)
    clearInterval(timer);  //counter 5 되면 timer 종료
}, 2000);   //2초마다 setinterval 함수실행


================================================================================

//setTimeout() 셋타임아웃 함수
//지정한 시간이 흐른후에 괄호안에있는 함수(콜백함수) 실행

setTimeout(() => {
  console.log("안녕하세요?")
}, 3000);                     //3초후에 콘솔메시지"안녕하세요"


----------------------------------------------------------------------------------

const JeaMok = document.querySelector("#title");
const EReum = document.querySelector("#desc p");
const SaJin = document.querySelector("#profile img");

JeaMok.onclick = () => JeaMok.innerText = "프로필";                 //Jeamok 이 #title 이니까 #title을 누르면 "프로필" 바뀐다.
EReum.onclick = () => EReum.innerHTML = `이름 : <b>민들레</b>`;     //EReum이 #desc p 니까 도레미(기존)에서 민들레로  바뀜
SaJin.onclick = () => SaJin.src = "images/pf2.png";


----------------------------------------------------------------------------------
/* selectMenu.option 선택창에서 뭘 누르면 displaySelect 되는 코드인듯?
*/
  
		const selectMenu = document.querySelector("#major");  // 선택 목록을 가져와 selectMenu로 저장

		function displaySelect() {
			let selectedText = selectMenu.options[selectMenu.selectedIndex].innerText;		 //선택자 너무 복잡해서 모르겠다
			alert(`[${selectedText}]를 선택했습니다.`);
		}		

		selectMenu.onchange = displaySelect;
----------------------------------------------------------------------------------
/*모달박스의 #open(클래스) 나 #close(클래스) 을 클릭했을때
모달박스가 닫히거나 열리는(add, remove) 이벤트리스너 완성
*/
const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
  modalBox.classList.add("active"); // 클릭하면 클래스리스트에 .active 스타일 추가
});

close.addEventListener("click", () => {
  modalBox.classList.remove("active"); // 클릭하면 클래스리스트에서 .active 스타일 제거
});
  
