$(document).ready( () => {
   setInterval(clock, 1000);

   quote();
   setInterval(quote, 45 * 1000);

   setInterval(slidePhotos, 5 * 1000);

   setTimeout( () => setInterval(vbcam, 90 * 1000), 45 * 1000 )

   setInterval(getInterAcitviteiten, 60 * 60 * 1000);

   // setInterval(showInterActiviteiten, 90 * 1000)
});