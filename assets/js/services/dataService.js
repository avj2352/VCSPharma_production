// PAJ - dataService to handle complex data logic model
(function(){
	angular.module('myApp').factory('dataService',['$http',dataService]);
		function dataService($http){
			// debugger;
			//Define Service functions here first
			return{
				sendEmailForm:sendEmailForm
			};
			// Service function to send Email
			function sendEmailForm(myForm){
				var name = myForm.name;
				var email = myForm.email;
				var subject = myForm.subject;
				var promise = $http({
	        method: "POST",
	        url:'sendEmail.php',
	        params:{
	          name:name,
						email:email,
						message:subject
	        }
	      })
				.success(function(data, status, headers, config){
	        return data;
	      })
	      .error(function(data, status, headers, config){
	        console.log('Error - dataService:sendEmailFrom: ', status);
	      });
	      return promise;
			};//end:sendEmailFrom()

    }//endservice:dataService()
}());//IIFE
