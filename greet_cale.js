const chalk = require('chalk');
const greet = require('./greet');
const figlet = require('figlet');

const styledMassage = chalk.bgGreen.black(greet('Cale'));
console.log(styledMassage);

figlet ('Hello World!!', function (err, data) {
	if (err) {
		console.log('Something went wrong...');
		console.dir(err);
		return;
	}
	console.log(data);
});
