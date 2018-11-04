angular.module("phoneList").filter("ellipsis", function() {
  return function(input, size) {
    return input.length <= size ? input : addEllipsis(size, input);
  };

  function addEllipsis(size, string) {
    return string.substring(0, size || 2) + "...";
  }
});
