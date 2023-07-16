let numOfPhotos = 0;
let current = 0;

async function loadPhotos() {
   $("#right").empty();
   return await fetch("https://bot.nautdevroome.nl/photo", {
      method: "GET",
      headers: {
         Authorization: getDiscordBotSecretKey()
      }
   })
   .then(res => res.json())
   .then(data => {
      const photos = data.photos;
      for (let photo of photos) {
         $("#right").append(`<span><img rel="prefetch" src="${photo}"></span>`);
      }
      numOfPhotos = photos.length;
   })
}

function slidePhotos() {
   current = current < numOfPhotos - 1 ? current + 1 : 0;
   if (current == 0) {
      $('#right').css('transform', 'translateY(-' + numOfPhotos * 100 + 'vh)');
      setTimeout( async () => {
         $('#right').css('opacity', '0');
         $('#right').css('transition', 'none');
         $('#right').css('transform', 'translateY(0vh)');
         $('#right').css('transition', 'all 1s ease-in-out');
         await loadPhotos();
         setTimeout(() => $('#right').css('opacity', '1'), 1000);
      }, 1000)
   } else {
      $('#right').css('transform', 'translateY(-' + current * 100 + 'vh)');
   }
}