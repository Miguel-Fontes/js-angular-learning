angular.module("phoneList").factory("quotesAPI", function($http, config) {

    const getQuote = () => {
        return $http.get(config.quotesBaseUrl + "/rrandom");
    }

    return {
        getQuote: getQuote
    }
})