// 사용자로부터 숫자를 입력받고 3의 배수인지 계속 확인
let input;

while (true) {
  input = prompt("숫자를 입력하세요 (취소하려면 취소 버튼을 누르세요):");

  if (input === null) {
    // 사용자가 취소를 눌렀을 때 반복 종료
    break;
  }

  const number = parseInt(input);

  if (isNaN(number)) {
    alert("숫자를 올바르게 입력해주세요.");
  } else {
    if (number % 3 === 0) {
      alert(`${number}는 3의 배수입니다.`);
    } else {
      alert(`${number}는 3의 배수가 아닙니다.`);
    }
  }
}
