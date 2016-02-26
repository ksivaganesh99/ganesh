myapp.factory("add",function(){
	var factory={};
	factory.addf=function(){
		var sum=0;
		for(var i=0;i<arguments.length;i++){
			sum+=arguments[i];
		}
		return sum;
	};
	return factory;
	
	
});