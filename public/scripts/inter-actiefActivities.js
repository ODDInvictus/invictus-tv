function showInterActiviteiten() {
   $('#ia').css('transform', 'translateY(0px)');
   $('#home').css('transform', 'translateY(100vh)');

   setTimeout( () => {
      $('#ia').css('transform', 'translateY(-100vh)');
      $('#home').css('transform', 'translateY(0px)');
   }, 10000);
}

function getInterAcitviteiten() {
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

   const dateObj = new Date(date);
   const day = dateObj.getDate();
   res += day + " ";
   const month = dateObj.getMonth();

   switch (month) {
      case 1:
         res += 'jan ';
         break;
      case 2:
         res += 'feb ';
         break;
      case 3:
         res += 'mar ';
         break;
      case 4:
         res += 'apr ';
         break;
      case 5:
         res += 'mei ';
         break;
      case 6:
         res += 'juni ';
         break;
      case 7:
         res += 'juli ';
         break;
      case 8:
         res += 'aug ';
         break;
      case 9:
         res += 'sep ';
         break;
      case 10:
         res += 'okt ';
         break;
      case 11:
         res += 'nov ';
         break;
      case 12:
         res += 'dec ';
         break;
   }

   res += dateObj.getHours() + ":" + dateObj.getMinutes().toString().padStart(2, "0");
   return res
}