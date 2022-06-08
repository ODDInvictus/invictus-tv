function quote() {
   $.ajax({
      method: 'GET',
      url: 'http://localhost:4200/quote',
      dataType: 'json'
   }).done( function(res) {
      $('p#quote').text(res.quote);
   });

   setTimeout(quote, 45000);
}