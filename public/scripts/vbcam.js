function vbcam() {
   const date = new Date();
   const isSunday = (date.getDay() === 7 && date.getHours() > 5) || (date.getDay() === 1 && date.getHours() < 21);
   if (isSunday) return;
   const hours = date.getHours();
   if (hours > 5 && hours < 21) return;

   $('#vbcam img').attr('src', 'https://www.vestingbar.nl/webcam-images/image.jpg?1651874116326?dummy=' + Math.floor(Math.random() * 9999999));

   $('#screen').hide();
   $('#vbcam').css('display', 'flex');

   setTimeout( function() {
      $('#screen').show();
      $('#vbcam').hide();
   }, 7000)
}