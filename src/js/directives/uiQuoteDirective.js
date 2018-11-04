angular.module("phoneList").directive("uiQuote", () => {
  const template = `
      <footer class="footer">
          <div class="container">
              <span class="text-muted">{{ quote }}</span>
          </div>
      </footer>
  `;

  return {
    template: template,
    restrict: "E",
    replace: true,
    scope: {
        quote: "="
    }
  };
});
