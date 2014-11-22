var app = angular.module('floater', []);

app.directive('floater', ['$window', '$timeout', function($window, $timeout) {
    return function(scope, element, attrs) {
        var w = $(window);

        $timeout(function() {
            var el = $(element),
                top = el.offset().top,
                bottom = $(attrs.floater).offset().top,
                h = el.height();

            w.on('scroll', function() {
                bottom = $(attrs.floater).offset().top;

                if ( w.scrollTop() + h + 20 >= bottom ) {
                    el.css({ 'position': 'absolute', 'top': 'auto', 'bottom': 0 });

                } else if ( w.scrollTop() >= top ) {
                    el.css({ 'position': 'fixed', 'top': 0, 'bottom': 'auto' });

                } else {
                    el.css({ 'position': 'static', 'top': '', 'bottom': '' });
                }
            });
        });

        scope.$on('$destroy', function() {
            w.off('scroll');
        });
    };
}]);
