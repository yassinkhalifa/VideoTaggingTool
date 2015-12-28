// Creating our main Angular module
var VideoTaggingApp = angular.module("VideoTaggingApp", ['ngRoute', 'ngSanitize', 'videoTaggingAppControllers'])


.config(function ($routeProvider) {

    $routeProvider
    .when('/', {
        controller: 'JobsController',
        templateUrl: 'partials/jobs.html'
    })
    .when('/jobs/:id/tag', {
        controller: 'TagJobController',
        templateUrl: 'partials/tagJob.html'
    })
    .when('/jobs/:id', {
        controller: 'UpsertJobController',
        templateUrl: 'partials/upsertjob.html'
    })
    .when('/jobs', {
        controller: 'JobsController',
        templateUrl: 'partials/jobs.html',
        activetab: 'jobs'
    })
    .when('/videos', {
        controller: 'VideosController',
        templateUrl: 'partials/videos.html',
        activetab: 'videos'
    })
    .when('/videos/:id', {
        controller: 'UpsertVideoController',
        templateUrl: 'partials/upsertVideo.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});


$(document).ready(function () {
    $(".navbar-nav li a[href!='']").click(function (event) {
        $(".navbar-collapse").collapse('hide');
    });

   
});
