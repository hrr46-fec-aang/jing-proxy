// const faker = require('faker');
// console.log(faker.date.between('2020-07-03', '2020-07-05', 'format: long'));
// console.log(new Date());
// var daylist = [];
// var result = [];
// var dates = [
//   {
//       "id": 97,
//       "bookingName": "Sabrina Little",
//       "arrive": "Wed Jul 01 2020 16:11:29 GMT-0700 (Pacific Daylight Time)",
//       "depart": "Fri Jul 03 2020 13:06:25 GMT-0700 (Pacific Daylight Time)",
//       "groupsize": 3,
//       "subtotal": 551,
//       "listingID": 97,
//       "listingName": "Cortez's purple lodge in Guinea-Bissau",
//       "price": 83
//   },
//   {
//       "id": 97,
//       "bookingName": "Donnie Boy",
//       "arrive": "Tue Jul 07 2020 02:13:57 GMT-0700 (Pacific Daylight Time)",
//       "depart": "2020-07-10",
//       "groupsize": 4,
//       "subtotal": 312,
//       "listingID": 97,
//       "listingName": "Cortez's purple lodge in Guinea-Bissau",
//       "price": 83
//   }
// ];
// var getDaysArray = function(start, end) {
//   for(var arr=[],dt=new Date(start); dt<=end; dt.setDate(dt.getDate()+1)){
//       arr.push(new Date(dt));
//   }
//   return arr;
// };


// for (var i = 0; i < dates.length; i++) {
//   daylist=getDaysArray(new Date(dates[i].arrive), new Date(dates[i].depart));
//   for (var date in daylist) {
//     result.push(daylist[date]);
//   }
// }

// console.log(result);

// var a = "Wed Jul 06 2020 16:11:29 GMT-0700 (Pacific Daylight Time)";
// var b = "Tue Jul 07 2020 02:13:57 GMT-0700 (Pacific Daylight Time)";

// console.log(new Date(a)>new Date(b));
// console.log(new Date(a)<new Date(b));
// console.log(new Date(a)==new Date(b));