angular.module("phoneList").filter("name", function() {
  return function(input) {
    return input
      .split(" ")
      .map(name => isNameConnector(name) ? name : capitalize(name))
      .join(" ");
  };

  function isNameConnector(string) {
    return /(da|de)/.test(string)
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
  }

});
