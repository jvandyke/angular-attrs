angular.module('angular.directives.attr', [])
.directive('attr', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attr) {
      var oldVal;

      scope.$watch(attr['attr'], watchAction, true);

      function watchAction(newVal) {
        if (newVal != oldVal) {
          updateAttrs(newVal)
        }
        oldVal = _.clone(newVal)
      }

      function updateAttrs(newAttrs) {
        addAttributes(getAttributesToAdd(newAttrs));
      }

      function getAttributesToAdd(newAttrs) {
        var attrsToAdd = {};

        if (angular.isString(newAttrs)) {
          angular.forEach(newAttrs.split(), function(attrName) {
            attrsToAdd[attrName] = '';
          });
        }
        else if (angular.isArray(newAttrs)) {
          angular.forEach(newAttrs, function(attrName) {
            attrsToAdd[attrName] = '';
          });
        }
        else if (angular.isObject(newAttrs)) {
          angular.forEach(newAttrs, function(attrValue, attrName) {
            if (typeof attrValue === "boolean") {
              if (attrValue) {
                attrsToAdd[attrName] = '';
              }
            }
            else {
              attrsToAdd[attrName] = attrValue;
            }
          });
        }
        return attrsToAdd;
      }

      function addAttributes(attrsToAdd) {
        angular.forEach(attrsToAdd, function(attrValue, attrName) {
          element.attr(attrName, attrValue);
        });
      }
    }
  }
});
