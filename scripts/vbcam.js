function vbcam() {
   $('#vbcam img').attr('src', 'https://www.vestingbar.nl/webcam-images/image.jpg?1651874116326?dummy=' + Math.floor(Math.random() * 9999999));

   $('#screen').hide();
   $('#vbcam').css('display', 'flex');

   setTimeout( function() {
      $('#screen').show();
      $('#vbcam').hide();
   }, 7000)

   setTimeout(vbcam, 90000);
}