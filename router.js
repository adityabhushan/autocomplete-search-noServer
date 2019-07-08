(function() {
    angular
    .module('search', ['ui.router'])

    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/')
        $stateProvider
            .state('autocomplete', {
                url: '/',
                templateUrl: 'templates/autocomplete.html',
                controller: 'autocompleteCtrl'
            })

    }])
})()
