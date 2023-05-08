function quote() {
   fetch("https://bot.nautdevroome.nl/quote", {
      headers: {
         Authorization: getDiscordBotSecretKey()
      }
   })
   .then(res => res.json())
   .then(data => {
      $('p#quote').text(data.quote);
   });

   setTimeout(quote, 45000);
}