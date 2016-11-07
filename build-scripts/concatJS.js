var concat = require('concat-files');

var env = "development";

var prodDependencies = ['./dependencies/velocity/velocity.min.js','./dependencies/vue/dist/vue.min.js'];
var devDependencies = ['./dependencies/velocity/velocity.js','./dependencies/vue/dist/vue.js'];
var srcFiles = ['./src/js/test.js'];

switch(env) {
	case "development":
	console.log("Running development concatenation.");
	var files = devDependencies.concat(srcFiles);
	concat([
		'./dependencies/velocity/velocity.js',
		'./dependencies/vue/dist/vue.js',
		'./src/js/test.js'
	], 'dist/js/master.js', function() {
		console.log('dist/js/master.js created');
	});
	break;
	case "production":
	console.log("Running production concatenation.");
	var files = prodDependencies.concat(srcFiles);
	concat([
		'./dependencies/velocity/velocity.min.js',
		'./dependencies/vue/dist/vue.min.js',
		'./src/js/test.js'
	], 'dist/js/master.js', function() {
		console.log('dist/js/master.js created');
	});
	break;
	default:
	console.log("An error occured: Unknown Environment");
	break;
}
