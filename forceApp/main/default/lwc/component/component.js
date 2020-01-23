import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
import doSomething from '@salesforce/apex/Controller.doSomething';

export default class SampleComponent extends LightningElement {
    _rendered = false;

    async renderedCallback() {
        if (!this._rendered) {
            doSomething(
                {
                    request: {
                        name: 'name'
                    }
                })
                .then(result => {
                    this.showToast('SUCCESS', 'Works!')
                })
                .catch(error => {
                    console.error(error)
                    this.showToast('error', 'Doesn\'t work!')
                });
            this._rendered = true;
        }
    }

    showToast(variant, title, message) {
        const event = new ShowToastEvent({
            title,
            message,
            variant,
            mode: 'sticky'
        });
  
        this.dispatchEvent(event);
    }
}