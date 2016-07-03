(function(){
  angular.module('myApp')
	.controller('mainController',['$scope','dataService',mainController]);
  function mainController($scope,dataService){
    // debugger;
    var vm = $scope;
    vm.form = {
      name:"",
      email:"",
      subject:""
    };
    vm.result = "Welcome from the About Us Section";
    vm.isResultJSON = false;
    vm.resultJSON = {};
    vm.isMoreAboutUs = false;
    vm.isMoreCareerSection = false;
    vm.moreAboutUs = function(){
      vm.isMoreAboutUs = true;
    }/*end:moreAboutUs()*/
    vm.lessAboutUs = function(){
      vm.isMoreAboutUs = false;
    }/*end:lessAboutUs()*/
    vm.moreCareerSection = function(){
      vm.isMoreCareerSection = true;
    }//end:moreCareerSection()
    vm.lessCareerSection = function(){
      vm.isMoreCareerSection = false;
    }//end:lessCareerSection()

    vm.submitForm = function(form){
      //debugger;
      console.log('Form inputs are: ', form);
      var sendEmailService = dataService.sendEmailForm(form);
      sendEmailService.then(function(data){
        console.log('Result from PHP is: ',data.data);
        vm.isResultJSON = true;
        vm.resultJSON = data.data;
        vm.form.name="";
        vm.form.email="";
        vm.form.subject = "";
        //  = {
        //   name:"",
        //   email:"",
        //   subject:""
        // };
      });//then()
    };//end:submitForm()

    vm.resetIsResultJSON = function(){
      vm.isResultJSON = false;
    }//end:resetIsResultJSON
  }//endcontroller:mainController
}());//IIFE
