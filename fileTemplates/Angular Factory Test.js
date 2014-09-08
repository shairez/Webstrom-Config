describe("${shortFactoryName}", function(){

    var service;

    beforeEach(module("${moduleName}"));
    
    beforeEach(inject(["${factoryName}",function(${shortFactoryName}){
        service = ${shortFactoryName};
    }]));

    describe("it should...", function(){
        Given(function(){ });
        When(function(){ });
        Then(function(){ });
    });
    
});