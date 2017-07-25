angular.module('ng-html2text', [])
    .filter('HtmlToText', function () {
      return function (text) {
          return text ? String(text).replace(/<[^>]+>/gm, '') : '';
      };
  }
);