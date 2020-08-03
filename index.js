const cheerio = require('cheerio')
const request = require('request')

request('https://nodejs.org/en/docs/', (error, response, html) => {
	if (!error && response.statusCode == 200) {

		//----Basic practice 
		// const xyzClass = $('.contributor-card');
		// console.log("html::::", xyzClass.html());
		// console.log("text::::", xyzClass.text());

		// const output = xyzClass.find('spinner-border').text;
		// console.log("output is:::", output);

		// $('.post-preview').each((i, el) => {
		//   const title = $(el)
		//     .find('.post-title')
		//     .text()
		//     .replace(/\s\s+/g, '');

		//practice
		// request('http://www.google.com/', function (err, resp, html) {
		// 	if (!err) {
		// 		const $ = cheerio.load(html);
		// 		// console.log("Helllo",html); 
		// 	}
		// });x

		//final learn
		const $ = cheerio.load('<ul id="fruits"><li class="apple">Apple</li><li class="orange">Orange</li><li class="pear">Pear</li></ul>');
		console.log("for id :::", $('#fruits').text());
		console.log("for class :::", $('.apple').text());
		console.log("for path.. in ul class pear :::",$('ul .pear').attr('class'));
	}
})