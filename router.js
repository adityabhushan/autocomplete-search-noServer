(function() {
    angular
    .module('search', ['ui.router'])

    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/')
        $stateProvider
            .state('search', {
                url:'/search',
                templateUrl: 'templates/search.html',
                controller: 'searchCtrl'
            })
            .state('autocomplete', {
                url: '/',
                templateUrl: 'templates/autocomplete.html',
                controller: 'autocompleteCtrl'
            })

    }])
})()
