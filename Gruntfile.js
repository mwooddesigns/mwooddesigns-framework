module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        sourceMap: false
      },
      dist: {
        files: {
          "css/master.css": "scss/master.scss"
        }
      }
    },
    autoprefixer: {
      option: {
        browsers: ["last 8 versions"]
      },
      dist: {
        files: {
          "css/master.css": "css/master.css"
        }
      }
    },
    cssbeautifier: {
      files: ["css/master.css"],
      options: {
        autosemicolon: true
      }
    },
    min: {
      css: {
				src: "css/master.css",
				dest: "css/master.min.css"
			}
    },
    watch: {
      css: {
        files: ["**/*.scss"],
        tasks: ["default"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-autoprefixer");
  grunt.loadNpmTasks("grunt-cssbeautifier");
  grunt.loadNpmTasks("grunt-min");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("default", ["sass", "autoprefixer", "cssbeautifier", "min", "watch"]);
}
