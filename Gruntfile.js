module.exports = function(grunt) {
  "use strict";
  grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");
  require("grunt-sapui5-config")(grunt);
  grunt.registerTask("default", ["clean", "lint", "build"]);
};
