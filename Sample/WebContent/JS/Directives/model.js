'use strict';

myapp.directive("model",function(){

	
	return{
		template : '<div class="modal fade" id="">' + 
        '<div class="modal-dialog">' + 
        '<div class="modal-content">' + 
          '<div class="modal-header">' + 
            '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
            '<h4 class="modal-title">{{ title }}</h4>' + 
          '</div>' + 
          '<div class="modal-body" ng-transclude></div>' + 
        '</div>' + 
      '</div>' + 
    '</div>',
		scope : false,
		restrict : 'E',
		transclude : true,
		replace : true,
		link : function postlink(scope,element,attrs){
			 scope.title = attrs.title;
			scope.$watch(attrs.visible,function(value){
				//alert(value);	
			if(value === true){
				$(element).modal('show');
			}else{
				$(element).modal('hide');
			}
			});
			
			$(element).on("show.bs.modal",function(){
				scope.$apply(function(){
				scope.$parent[attrs.visible]=true;
				});
			});
			$(element).on("hidden.bs.modal",function(){
				scope.$apply(function(){
				scope.$parent[attrs.visible]=false;
				});
			});
		}
	};
});