// canvas1: 곡선
const canvas1 = document.querySelector('#canvas1');
const ctx1 = canvas1.getContext("2d");
ctx1.beginPath();
ctx1.moveTo(50, 100);
ctx1.bezierCurveTo(90, 250, 310, 10, 350, 100);
ctx1.strokeStyle = "green";
ctx1.stroke();

// canvas2: 타원
const canvas2 = document.querySelector('#canvas2');
const ctx2 = canvas2.getContext("2d");
ctx2.strokeStyle = "blue";
ctx2.save();           // ← scale 영향 방지용
ctx2.scale(0.7, 1);
ctx2.beginPath();
ctx2.arc(200, 150, 50, 0, Math.PI * 2);
ctx2.stroke();
ctx2.closePath();
ctx2.restore();

// canvas4: 텍스트
const canvas4 = document.querySelector('#canvas4');
const ctx4 = canvas4.getContext("2d");
ctx4.fillStyle = "yellow";
ctx4.strokeStyle = "red";
ctx4.font = "italic 60px serif";
ctx4.fillText("Javascript", 50, 70);
ctx4.strokeText("Javascript", 50, 70);
ctx4.font = "bold 60px sans-serif";
ctx4.fillText("Javascript", 50, 150);
ctx4.strokeText("Javascript", 50, 150);

// canvas5: 도형
const canvas5 = document.querySelector("#canvas5");
const ctx5 = canvas5.getContext("2d");

ctx5.beginPath();
ctx5.moveTo(50, 50);
ctx5.lineTo(150, 100);
ctx5.lineTo(50, 150);
ctx5.closePath();
ctx5.stroke();

ctx5.beginPath();
ctx5.moveTo(150, 100);
ctx5.lineTo(250, 50);
ctx5.lineTo(250, 150);
ctx5.closePath();
ctx5.fillStyle = "rgb(0, 200, 0)";
ctx5.fill();
