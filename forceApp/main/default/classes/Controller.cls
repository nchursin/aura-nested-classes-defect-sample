public with sharing class Controller {
    public class Result {}

    @AuraEnabled
    public static Result doSomething(Resources.BaseRequest request) {
        return new Result();
    }
}
