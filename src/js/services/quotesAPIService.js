angular.module("phoneList").factory("quotesAPI", function($http, config) {

    const getQuote = () => {
        return $http.get(config.quotesBaseUrl + "/random");
    }

    return {
        getQuote: getQuote
    }
})