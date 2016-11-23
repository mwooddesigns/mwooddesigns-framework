// var concat = require('concat-files');
var buildify = require('buildify');

var env = "development";

var prodDependencies = ['./dependencies/velocity/velocity.min.js', './dependencies/vue/dist/vue.min.js'];
var devDependencies = ['./dependencies/velocity/velocity.js', './dependencies/vue/dist/vue.js'];
var srcFiles = ['./src/js/test.js'];

switch (env) {
  case "development":
    console.log("Running development concatenation.");
    var files = devDependencies.concat(srcFiles);

    buildify()
      .concat(files)
      .save("./dist/js/master.js");
    console.log("master.js file created");
    break;
  case "production":
    console.log("Running production concatenation.");
    var files = prodDependencies.concat(srcFiles);
    buildify()
      .concat(files)
      .save("./dist/js/master.js");
    console.log("master.js file created");
    break;
  default:
    console.log("An error occured: Unknown Environment");
    break;
}
