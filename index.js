angular.module('myBlog', []);
angular.module('myBlog').controller('Rest', function($scope, $http, $window){
    $http.get('https://api-rest-post-diegocandido.herokuapp.com/postagens/')
    .then(function(response){
        $scope.publicacoes = response.data;
    })
    $scope.detalhes = function(id){
        let url = `/postagem.html?id=${id}`;
        $window.location.href = url;
    }
})

angular.module('postApp', []);
angular.module('postApp').controller('Post', function($scope, $http){
        $http.get(`https://api-rest-post-diegocandido.herokuapp.com/postagem/${1}`)
            .then(function(response){
                $scope.publicacoes = response.data;
            })
})