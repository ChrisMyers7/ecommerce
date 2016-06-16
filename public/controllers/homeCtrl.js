angular.module('app')
  .controller('homeCtrl', function($scope, homeService) {

    $scope.myProducts = (function() {
      homeService.getProducts().then(function(response) {
        $scope.products = response.data
      })
    })()

  })
