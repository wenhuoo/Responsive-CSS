
angular.module('MyApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

.controller('AppCtrl', function($scope) {
  $scope.title1 = 'Button';
  $scope.selectedQual = null;
  $scope.selectedCourse = null;

  $scope.qualifications =[
        {
            'name': "Q1",
            'courses' : [
                {   'name':"C1"},
                {   'name':"C2"},
                {   'name':"C3"}
            ]
        },
        {
            'name': "Q2",
            'courses' : [
                {   'name':"C4"},
                {   'name':"C5"},
                {   'name':"C6"}
            ]
        }
  ]

$scope.countIncrease = function(){
    
    $scope.count=$scope.count+1;

}
});