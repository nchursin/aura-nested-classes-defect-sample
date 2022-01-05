public with sharing class Controller {
    public class Result {
        @AuraEnabled
        public String result { get; set; }

        public Result(String result) {
            this.result = result;
        }
    }

    @AuraEnabled
    public static Result doSomething(Resources resourceRequest) {
        return new Result(resourceRequest.request.name);
    }
}
