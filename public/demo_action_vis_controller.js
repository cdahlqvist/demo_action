define(function (require) {
  var marked = require('marked');
  marked.setOptions({
    gfm: true, // Github-flavored markdown
    sanitize: true // Sanitize HTML tags
  });

  var module = require('ui/modules').get('kibana/demo_action_vis', ['kibana']);
  module.controller('KbnDemoActionVisController', function ($scope, $sce) {
    $scope.$watch('vis.params.demo_action', function (html) {
      if (!html) return;
      $scope.html = $sce.trustAsHtml(marked(html));
    });
  });
});
