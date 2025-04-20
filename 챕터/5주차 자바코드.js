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
