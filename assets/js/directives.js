angular.module('app').directive('blueprintTip', function() {
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
    template: " <div class='tip-panel'>
                  <h3 class='tip-panel__name'>{{tip.title}}</h3>
                  <h4 class='tip-panel__section-heading'>{{tip.problem}}</h4>
                  <div clsas='tip-panel__section-content'>{{tip.problem.text}}</div>
                  <h4 class='tip-panel__section-heading'>{{tip.problem}}</h4>
                  <div class='tip-panel__section-content'>{{tip.problem.text}}</div>
                  <nav class='tip-panel__nav'>
                    <a ui-sref='nextTip.state()'>Next: {{nextTip.name()}}</a>
                  </nav>
                </div>",
    // templateUrl: '',
    replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {
      // ...
    }
  };
});
