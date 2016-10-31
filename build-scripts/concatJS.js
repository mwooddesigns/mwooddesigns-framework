var concat = require('concat-files');

concat([
	'./dependencies/vue/dist/vue.js',
	'./src/js/test.js'
], 'dist/js/master.js', function() {
	console.log('dist/js/master.js created');
});
