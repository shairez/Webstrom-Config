angular.module("mocks.${factoryName}", [])
.factory("${factoryName}", function(${DS}q){

    var mock = jasmine.createSpyObj("${factoryName}", 
                                    ["${methodName}"]);
    mock.${DS}deferred = {
			
    }
    return mock;
});