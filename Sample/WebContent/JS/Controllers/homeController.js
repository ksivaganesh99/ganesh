'use strict';

myapp.controller("homeController",["$scope","add","ngDialog","$http",function($scope,add,ngDialog,$http){
	
	$scope.student={};
	$scope.studentArray=[];
	$scope.studentArray.push({"id":1,"name":"siva","salary":5000});
	$scope.count=0;
	$scope.showModel=false;
	/*$scope.student.name="siva";
	$scope.student.id=99;*/
	$scope.addtocart=function(event){
		/*var result=add.addf(2,3,5,9,8,7);*/
	/*	$scope.count=result;	*/
		alert($scope.student.name);
		$scope.studentArray.push($scope.student);
	}
	
	$scope.add=function(event){
		/*ngDialog.openConfirm({
						template:"tempelateid.html",
						controller: "homeController",
						scope: $scope
		})
		});*/
		 ngDialog.openConfirm({            
	            template: 'tempelateid.html',
	            scope:$scope           
	        }).then(function(value){
	        	
	    		$scope.studentArray.push({"id":$scope.student.id,"name":$scope.student.name,"salary":$scope.student.salary});
	    		 var responsePromise =  $http({
	    				 url : "/Sample/MainServlet",
	    				 params:$scope.student
	    		 		
	    		 });
	    		console.log(value);           
	            
	        },function(reject){
	            console.log(reject);
	            
	            
	        });
	};
	
	$scope.studentdetails=function(event){
		
		 var responsePromise =  $http({
			 url : "/RestAPI/angular/studentdetails/6"
	 });
		
	};
	$scope.loading=true;
	$scope.submit=function(){
		$scope.loading=false;
		$http.get("/Sample/MainServlet", {email : $scope.data.email}).success(function(data){
			alert(data);
			$scope.loading=true;
		}).error(function(){
			$scope.loading=true;
			
		});
		
		alert($scope.data.email);
		alert($scope.data.password);
	};
	$scope.togglemodel=function(){
		
		 ngDialog.openConfirm({            
	            template: 'loginform.html',
	            scope:$scope           
	        }).then(function(value){
	        	
	        },function(reject){
	            console.log(reject);
	            
	            
	        });
	};
	
}]);