function interActiviteiten() {
   $('#ia').css('transform', 'translateY(0px)');
   $('#home').css('transform', 'translateY(100vh)');

   setTimeout( () => {
      $('#ia').css('transform', 'translateY(-100vh)');
      $('#home').css('transform', 'translateY(0px)');
   }, 10000);

   setTimeout(interActiviteiten, 90000)
}

function getActivities() {
   $.ajax({
      method: 'POST',
      url: 'https://www.inter-actief.utwente.nl/api/',
      dataType: 'json',
      data: JSON.stringify({
         "jsonrpc": "2.0",
         "method": "getUpcomingActivities",
         "params": [ 7, true ],
         "id": 1446131
      })
   }).done( (res) => {
      $('#ia').html("<h2>Inter-<i>Actief</i></h2>");
      for (let i = 0; i < res.result.length; i++) {
         $('#ia').append(`<p>${res.result[i].title}</p>`);
         $('#ia').append(`<p class="date"><i>
            ${dateFormat(res.result[i].beginDate) + ", " +
            res.result[i].location}
            </i></p>`);
      }
   });

   setTimeout(getActivities, 1200000);
}

function dateFormat(date) {
   let res = "";

   const dateSplitted = date.split('T')
   const day = dateSplitted[0].split('-');
   res += day[2] + " ";

   switch (day[1]) {
      case '01':
         res += 'jan ';
         break;
      case '02':
         res += 'feb ';
         break;
      case '03':
         res += 'mar ';
         break;
      case '04':
         res += 'apr ';
         break;
      case '05':
         res += 'mei ';
         break;
      case '06':
         res += 'juni ';
         break;
      case '07':
         res += 'juli ';
         break;
      case '08':
         res += 'aug ';
         break;
      case '09':
         res += 'sep ';
         break;
      case '10':
         res += 'okt ';
         break;
      case '11':
         res += 'nov ';
         break;
      case '12':
         res += 'dec ';
         break;
   }

   res += dateSplitted[1].substring(0, 5);
   return res
}