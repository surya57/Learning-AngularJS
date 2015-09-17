/**
* Name: javaScriptAlert
* Purpose: To alert user when the function is called
* by having a pop-up.
*/

function javaScriptAlert()
{
	// var inputField = document.myform.Field.value;
             
  // alert(inputField);
  alert(document.getElementById('Alerting').value);  //you could either have this line, or BOTH of those above.
}

angular.module('learningAngular', [])
  .controller('FormCtrl', ['$scope', function ($scope) {

    // $scope.inputField = '';

    $scope.clickedButton = function () {
      console.log('clickedButton');
      alert($scope.inputField);
    };
    
  }]);