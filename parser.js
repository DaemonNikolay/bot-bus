// var request = require('request'),
//     cheerio = require('cheerio');

// //Загружаем страницу
// request({ uri: 'http://www.nikulux.ru/', method: 'GET', encoding: 'utf-8' },
//     function(err, res, page) {

//         var $ = cheerio.load(page);

//         img_src = $('h2').text();
//         console.log(img_src);
//     });

var osmosis = require('osmosis');

// var url = osmosis
//     .get('www.nikulux.ru');
// url
// .find('h2')
// .set('location')
// .follow('@href')
// .find('header + div + div li > a')
// .set('category')
// .follow('@href')
// .paginate('.totallink + a.button.next:first')
// .find('p > a')
// .follow('@href')
// .set({
//     'title': 'section > h2',
//     'description': '#postingbody',
//     'subcategory': 'div.breadbox > span[4]',
//     'date': 'time@datetime',
//     'latitude': '#map@data-latitude',
//     'longitude': '#map@data-longitude',
//     'images': ['img@src']
// })
// .data(function(listing) {

// })
// .log(console.log)
// .error(console.log)
// .debug(console.log)

let result = [];

osmosis
    .get('https://nskgortrans.ru/components/com_planrasp/helpers/grasp.php?tv=mr&m=036&t=1&r=B&sch=23&s=0&v=0')
    .set({ 'spandiv': ['span, div'] })
    // .set({ 'div': ['div'] })
    .data(function(data) {
        // console.log(data);
        result.push(data);
    })
    .done(function() {
        console.log(result);
    })