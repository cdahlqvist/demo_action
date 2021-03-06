
describe('demo_action vis controller', function () {
  var $scope;
  var $el;
  var ngMock = require('ngMock');
  var expect = require('expect.js');

  beforeEach(ngMock.module('kibana/demo_action_vis'));
  beforeEach(ngMock.inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller('KbnDemoActionVisController', {$scope: $scope});
    $scope.$digest();
  }));

  it('should set html from markdown params', function () {
    expect($scope).to.not.have.property('html');
    $scope.vis = {
      params: {
        markdown: 'This is a test of the [markdown](http://daringfireball.net/projects/markdown) vis.'
      }
    };
    $scope.$digest();

    expect($scope).to.have.property('html');
    expect($scope.html.toString().indexOf('<a href')).to.be.greaterThan(-1);
  });
});
