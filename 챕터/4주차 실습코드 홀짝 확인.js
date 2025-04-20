// 사용자로부터 숫자를 입력받고 홀/짝 여부를 계속 확인
let input;

while (true) {
  input = prompt("숫자를 입력하세요 (취소하려면 취소 버튼을 누르세요):");

  if (input === null) {
    // 사용자가 취소를 눌렀을 때 반복 종료
    break;
  }

  const number = parseInt(input);

  // 자연수인지 확인: 숫자이고 1 이상의 정수여야 함
  if (isNaN(number) || number < 1 || !Number.isInteger(number)) {
    alert("올바르지 않은 입력입니다. 자연수를 입력해주세요.");
  } else {
    if (number % 2 === 0) {
      alert(`${number}는 짝수입니다.`);
    } else {
      alert(`${number}는 홀수입니다.`);
    }
  }
}
