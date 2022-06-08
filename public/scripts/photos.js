let numOfPhotos = 0;
let current = 0

function loadPhotos() {
   $.ajax({
      url: './fotos',
      method: 'GET'
   }).done( function(res) {
      $(res).find("a").attr("href", function (i, val) {
         if( val.match(/\.(jpe?g|png)$/) ) { 
            $("#right").append( "<span><img src='" + val +"'></span>" );
            numOfPhotos++;
         } 
   });
   });
}

function slidePhotos() {
   current = current < numOfPhotos - 1 ? current + 1 : 0;
   $('#right').css('transform', 'translateY(-' + current * 100 + 'vh)');
   setTimeout(slidePhotos, 10000);
}