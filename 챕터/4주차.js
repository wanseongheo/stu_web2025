function convertToFahrenheit() {
  const celsiusInput = document.getElementById("celsius").value;
  const fahrenheit = (celsiusInput * 9 / 5) + 32;
  document.getElementById("result").innerText =
    `섭씨 ${celsiusInput}도는 화씨 ${fahrenheit.toFixed(1)}도입니다.`;
}
