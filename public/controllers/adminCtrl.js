angular.module('app')
  .controller('adminCtrl', function($scope, adminService) {

    $scope.myProducts = function() {
      adminService.getProducts().then(function(response) {
        $scope.products = response.data.reverse()
      })
    }

    $scope.myProducts()

    $scope.addProduct = function() {
      adminService.postProduct($scope.product).then(function(response) {
        $scope.products.unshift(response.data)
        console.log(response.data);
        $scope.product.title = '';
        $scope.product.description = '';
        $scope.product.price = '';
      })
    }

    $scope.updateProduct = function(product) {
      adminService.updateProduct($scope.product, product).then(function(response) {
        $scope.product.title = '';
        $scope.product.description = '';
        $scope.product.price = '';
        $scope.myProducts();
      })
    }

    $scope.deleteProduct = function(e) {
      adminService.deleteProduct($scope.products[e]).then(function(response){
        console.log(response.data);
        $scope.products.splice(e,1);
      })
    }


  })
