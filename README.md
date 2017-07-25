# ng-html2text #

## Install ##
	npm install ng-html2text
	
## Usage ##

	<script src="%path-to-node_modules%/ngHtml2Text.js"></script>

	angular.module('YourModule', ['ng-html2text'])
	
	<div>{{myText | HtmlToText}}</div>  

	$filter('HtmlToText')(htmlString);