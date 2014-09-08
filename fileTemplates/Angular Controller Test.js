describe("${shortControllerName}", function(){

    var ctrl,
        scope,
	    ${DS}rootScope,
	    ${DS}controller;

    beforeEach(module("${moduleName}"));

    // Initialize the controller and a mock scope
    beforeEach(inject(["${DS}controller", "${DS}rootScope",
	        function (_${DS}controller, _${DS}rootScope) {

		        ${DS}rootScope = _${DS}rootScope;
		        ${DS}controller = _${DS}controller;
		        scope = ${DS}rootScope.${DS}new();
		        ctrl = ${DS}controller('${fullControllerName}', {
		            ${DS}scope: scope
		        });
    }]));

    
    describe("it should...", function(){
        Given(function(){ });
        When(function(){ });
        Then(function(){ });
    });
    
});