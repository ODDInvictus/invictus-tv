function clock() {
   date = new Date();

   //Update clock
   $('p#clock').text(format(date.getHours()) + ':' + format(date.getMinutes())  + ':' + format(date.getSeconds()));

   // Play 'het is 4 uur' 16 seconds before its 16.00
   if (date.getHours() == 15 && date.getMinutes == 59 && date.getSeconds == 44) {
      $('#4uur')[0].play();
   }

   setTimeout(clock, 900);
}

function format(num) {
   return num > 9 ? num : '0' + num;
}