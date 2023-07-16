function quote() {
   fetch("https://bot.nautdevroome.nl/quote", {
      headers: {
         Authorization: getDiscordBotSecretKey()
      }
   })
   .then(res => res.json())
   .then(data => {
      $('p#quote').css('opacity', '0')
      setTimeout(() => {
         $('p#quote').text(data.quote);
         $('p#quote').css('opacity', '1')
      }, 800);
   });
}