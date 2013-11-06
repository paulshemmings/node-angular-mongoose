var app = angular.module('main-container-module', []);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/people',
            {
                controller: 'PeopleController',
                templateUrl: '/app/partials/people.html'
            })
        .when('/personTasks/:personID',
            {
                controller: 'PersonTasksController',
                templateUrl: '/app/partials/personTasks.html'
            })
        .when('/tasks',
            {
                controller: 'TasksController',
                templateUrl: '/app/partials/tasks.html'
            })
        .otherwise({ redirectTo: '/people' });
});