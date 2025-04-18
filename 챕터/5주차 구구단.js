function printDan(from, to) {
    for (let dan = from; dan <= to; dan++) {
      document.write("<div class='dan'>");
      document.write(`<strong>${dan}단</strong><br>`);
      for (let i = 1; i <= 9; i++) {
        document.write(`${dan} x ${i} = ${dan * i}<br>`);
      }
      document.write("</div>");
    }
  }
  
  document.write("<div class='dan-row'>");
  printDan(2, 5);
  document.write("</div>");
  
  document.write("<div class='dan-row'>");
  printDan(6, 9);
  document.write("</div>");
  