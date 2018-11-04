angular.module("phoneList").directive("uiFooter", () => {

    const template = `
      <div style="text-align: center;">
        Criado por {{author}}
      </div>
    `;

    return {
        template: template,
        restrict: "E",
        replace: true,
        scope: {
            author: "@"
        }
    }
})