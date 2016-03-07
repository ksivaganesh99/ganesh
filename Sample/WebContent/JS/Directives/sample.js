'use strict';

myapp.directive("mydirective",function(){
	var directive={};
	directive.restrict="EA";
	directive.scope="false";
	directive.template="<h2>hello</h2>";
	return directive;
});

myapp.directive("shoppingcart",function(){
	var directive={};
	directive.restrict="EA";
	directive.scope="true";
	directive.template='<li><a href="#cart"><span class="glyphicon glyphicon-shopping-cart">{{count}}</span></a></li></ul>';
	directive.link=function($scope,element,attrs){
		
		element.css("color","red");
		alert("adads"+attrs.type);
		
	}
	return directive;
});