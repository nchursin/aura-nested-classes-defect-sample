public with sharing class Resources {
    public class BaseRequest {
        @AuraEnabled
        public String name { get; set; }
    }
}
