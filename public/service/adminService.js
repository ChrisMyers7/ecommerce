angular.module('app')
  .service('adminService', function($http) {

    this.getProducts = function() {
      return $http({
        method: 'GET',
        url: 'http://localhost:3000/api/products'
      })
    }

    this.postProduct = function(product) {
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/api/products',
        data: product
      })
    }

    this.updateProduct = function(newProduct, product) {
      return $http({
        method: "PUT",
        url: 'http://localhost:3000/api/products/' + product.title,
        data: newProduct
      })
    }

    this.deleteProduct = function(product) {
      return $http({
        method: 'DELETE',
        url: 'http://localhost:3000/api/products/' + product.title
      })
    }

  })
