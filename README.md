# Aura Enabled nested classes defect

This is a code sample to reproduce a defect with nested classes in AuraEnabled method with LWC.

We used nested classes in LWC controller to have a single class with all the AuraEnabled parameters. That works in a no-namespace environment but stops working when we either package that or deploy to a scratch org with a namespace.

To make sure this code works w/o namespace:

1. Create a scratch without a namespace
1. Push code
1. Go to an App Lightning page called `Defect`
1. See a green toast

To reproduce defect with this repo:

1. Add a namespsace in the `sfdx-project.json` definition file
1. Create a scratch with the namespace
1. Push code
1. Go to an App Lightning page called `Defect`
1. Open browser console (F12). The error should be there. Also a red toast will indicate that the error happened

More info can be found [here](https://salesforce.stackexchange.com/questions/292152/why-the-auraenabled-method-throws-an-internal-error-when-a-namespace-is-enabled/292153#292153)