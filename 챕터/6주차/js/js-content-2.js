const JeaMok = document.querySelector("#title");
const EReum = document.querySelector("#desc p");
const SaJin = document.querySelector("#profile img");

JeaMok.onclick = () => JeaMok.innerText = "프로필";                 //Jeamok 이 #title 이니까 #title을 누르면 "프로필" 바뀐다.
EReum.onclick = () => EReum.innerHTML = `이름 : <b>민들레</b>`;     //EReum이 #desc p 니까 도레미(기존)에서 민들레로  바뀜
SaJin.onclick = () => SaJin.src = "images/pf2.png";
