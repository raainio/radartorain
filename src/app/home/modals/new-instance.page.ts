import {Component, Input} from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
    selector: 'modal-page',
    templateUrl: 'new-instance.page.html',
})
export class NewInstancePage {

    // "value" passed in componentProps
    @Input() value: number;

    constructor(private modalController: ModalController, private navParams: NavParams) {
        // componentProps can also be accessed at construction time using NavParams}
    }

    dismiss() {
        this.modalController.dismiss();
    }

    add(RadarToRainUrl, RadarToRainUser, RadarToRainPwd) {
        this.modalController.dismiss();
    }

}
