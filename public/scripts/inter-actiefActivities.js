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
   fetch("https://www.inter-actief.utwente.nl/api/", {
      method: "POST",
      headers: {
         "Accept-Language": "nl-NL",
         "Content-Type": "application/json"
      },
      body: JSON.stringify({
         jsonrpc: "2.0",
         method: "getUpcomingActivities",
         params: [7, true],
         id: 21423
      })
   })
   .then(res => res.json())
   .then(renderActivities)

   setTimeout(getActivities, 1200000);
}

function renderActivities(data) {
   $('#ia').html("<h2>Inter-<i>Actief</i></h2>");
   for (let i = 0; i < data.result.length; i++) {
      $('#ia').append(`<p>${data.result[i].title}</p>`);
      $('#ia').append(`<p class="date"><i>
         ${dateFormat(data.result[i].beginDate) + ", " +
         data.result[i].location}
         </i></p>`);
   }
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