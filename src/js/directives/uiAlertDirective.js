angular.module("phoneList").directive("uiAlert", function() {
  var template = `
    <div class='ui-alert'>
      <div class='ui-alert-title'>
          {{title}}
      </div>
      <div class='ui-alert-message'>
          {{message}}
      </div>
    </div>`;

  return {
    template: template,
    replace: true,
    restrict: "E",
    scope: {
        title: "@",
        message: "="
    },
    //templateUrl: "view/alert.html"
  };
});
