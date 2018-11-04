angular.module("phoneList").directive("uiAccordions", () => {
    return {
        controller: function ($scope, $element, $attrs) {
            let accordions = [];

            this.registerAccordion = accordion => {
                accordions.push(accordion);
            }

            this.closeAll = () => {
                accordions.forEach(accordion => accordion.isOpened = false);
            }
        }
    }
})

angular.module("phoneList").directive("uiAccordion", () => {
    const template = `
    <div class="ui-accordion-title" ng-click="open()">
      {{title}}
    </div>
    <div class="ui-accordion-content" ng-transclude ng-show="isOpened"></div>
    `

    return {
        template: template,
        transclude: true,
        scope: {
            title: "@"
        },
        require: "^uiAccordions",
        link: (scope, element, attrs, ctrl) => {
            ctrl.registerAccordion(scope);
            scope.open = () => {
                ctrl.closeAll();
                scope.isOpened=!scope.isOpened;
            }
        }
    }
})