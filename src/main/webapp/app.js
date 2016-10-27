'use strict';

var app = angular.module('myApp', []);

app.factory('PersonsFactory', function () {
    var persons = [
        {firstname: 'John', lastname: 'Rasmussen'}
        , {firstname: 'Bent', lastname: 'Andersen'}
        , {firstname: 'Pia', lastname: 'Johansen'}
        , {firstname: 'Camilla', lastname: 'Andersen'}];

    var getPersons = function () {
        return persons;
    };

    return {
        getPersons: getPersons
    };

});

app.service('MyService', function () {
    this.titleCase = function (s) {
        var attributeParts = s.split(' ');
        var output = '';
        for (var i = 0; i < attributeParts.length; i++) {
            if (i === attributeParts.length - 1) {
                var string = '';
                string = attributeParts[i];
                string = string.charAt(0).toUpperCase() + string.slice(1);
                output += string;
            } else {
                string = '';
                string = attributeParts[i];
                string = string.charAt(0).toUpperCase() + string.slice(1);
                output += string + ' ';
            }
        }
        return output;
    };

    this.camelCase = function (s) {
        var attributeParts = s.split(' ');
        var output = '';
        for (var i = 0; i < attributeParts.length; i++) {
            var string = '';
            string = attributeParts[i];
            string = string.charAt(0).toUpperCase() + string.slice(1);
            output += string;
        }
        return output;
    };

    this.dashCase = function (s) {
        var attributeParts = s.split(' ');
        var output = '';
        for (var i = 0; i < attributeParts.length; i++) {
                var string = '';
                string = attributeParts[i];
                output += string + '-';
        }
        return output.substring(0, output.length-1);
    };
});

app.controller('PersonController', ["$scope", "PersonsFactory", "MyService", function ($scope, PersonsFactory, MyService) {
        var self = this;

        self.persons = PersonsFactory.getPersons();
        self.testPerson = self.persons[0];

        self.titleCase = function (s) {
            return MyService.titleCase(s);
        };

        self.camelCase = function (s) {
            return MyService.camelCase(s);
        };

        self.dashCase = function (s) {
            return MyService.dashCase(s);
        };



    }]);

app.filter('myFilter', function () {

    return function (input) {
        var person = '';
        person += input.lastname;
        person += ' ' + input.firstname;
        return person;
    };

});

app.directive('loginForm', function () {

    return {
        restrict: 'E',
        templateUrl: 'login-form.html'
    };
});

