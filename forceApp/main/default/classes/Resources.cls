public class Resources {
    @AuraEnabled
    public BaseRequest request { get; set; }

    public class BaseRequest {
        @AuraEnabled
        public String name { get; set; }
    }
}
