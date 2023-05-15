let numOfPhotos = 0;
let current = 0

function loadPhotos() {
   $("#right").empty();
   fetch("https://bot.nautdevroome.nl/photo", {
      method: "GET",
      headers: {
         Authorization: getDiscordBotSecretKey()
      }
   })
   .then(res => res.json())
   .then(data => {
      const photos = data.photos;
      for (let photo of photos) {
         numOfPhotos++;
         $("#right").append(`<span><img src="${photo}"></span>`);
      }
   })
}

function slidePhotos() {
   current = current < numOfPhotos - 1 ? current + 1 : 0;
   if (current == 0) loadPhotos();
   $('#right').css('transform', 'translateY(-' + current * 100 + 'vh)');
   setTimeout(slidePhotos, 10000);
}