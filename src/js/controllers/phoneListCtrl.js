app.controller("phoneListCtrl", function($scope, quotesAPI, serialGenerator) {

  var vm = this;

  console.log(serialGenerator.generate())

  $scope.app = "Lista Telefonica";
  $scope.contacts = [
    {
      name: "Pedro",
      phone: "99998888",
      provider: { name: "Oi", code: 14, category: "Mobile", price: 2 },
      date: new Date(),
      color: "red"
    },
    {
      name: "João",
      phone: "99998877",
      provider: { name: "Vivo", code: 15, category: "Mobile", price: 1 },
      date: new Date(),
      color: "blue"
    },
    {
      name: "Maria",
      phone: "99998866",
      provider: { name: "GVT", code: 25, category: "Phone", price: 1 },
      date: new Date(),
      color: "yellow"
    }
  ];

  $scope.providers = [
    { name: "Oi", code: 14, category: "Mobile", price: 2 },
    { name: "Vivo", code: 15, category: "Mobile", price: 1 },
    { name: "Tim", code: 41, category: "Mobile", price: 3 },
    { name: "GVT", code: 25, category: "Phone", price: 1 },
    { name: "Embratel", code: 21, category: "Phone", price: 2 }
  ];

  vm.$onInit = () => {
    $scope.quote = "";
  };

  activate();

  function activate() {
    getQuote();
  }

  function getQuote() {
    quotesAPI.getQuote().then(response => {
      $scope.quote = response.data.quote + " - " + response.data.author;
    });
  }

  $scope.addContact = contact => {
    contact.serial = serialGenerator.generate();
    $scope.contacts.push(contact);
    delete $scope.contact;
    $scope.contactForm.$setPristine();
  };

  $scope.deleteContact = contacts => {
    $scope.contacts = contacts.filter(contact => !contact.selected);
  };

  $scope.isContactSelected = contacts => {
    return contacts.some(contact => contact.selected);
  };

  $scope.orderBy = field => {
    $scope.orderingCriteria = field;
    $scope.orderingDirection = !$scope.orderingDirection;
  };
});
