app.config(function($routeProvider) {
  $routeProvider.when("/contacts", {
    templateUrl: "view/contacts.html",
    controller: "phoneListCtrl"
  });
});
