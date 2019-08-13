import {AfterViewInit, Component} from '@angular/core';
import {ModalController} from '@ionic/angular';

import {NewInstancePage} from './modals/new-instance.page';
import {Profile} from '../shared/profile.service';
import {Router} from '@angular/router';
import {EndpointInterface} from 'fidj/sdk/interfaces';
import {FidjStorageNode, RainNode} from "../shared/fidj-storage.model";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

    public refreshInProgress = false;
    public infoWindowAlreadyView = {};
    public data: FidjStorageNode;


    constructor(private router: Router,
                private modalController: ModalController,
                private profile: Profile) {
        this.refresh();
    }

    ngAfterViewInit() {
        console.log('AfterViewInit');
        // this.refresh();
    }

    closeInfo(windowName) {
        this.infoWindowAlreadyView[windowName] = true;
    }

    clickOnNotifications() {
        this.router.navigate(['/event']);
    }

    clickOnRain(rain: RainNode) {
        // this.router.navigate(['/rain', rain.id]);
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: NewInstancePage,
            componentProps: {value: 123}
        });
        await modal.present();

        const {data} = await modal.onDidDismiss();
        console.log(data);
    }

    async refresh(event?) {
        // let needToLogin = false;
        this.refreshInProgress = true;
        try {
            this.data = await this.profile.refreshProfile();
        } catch (e) {
            console.error('refresh1 pb:', e);
            // needToLogin = (e.code === 401 || e.code === 403);
        }

        if (event) {
            event.target.complete();
        }
        this.refreshInProgress = false;

        if (!this.profile.isLoggedIn()) {
            this.router.navigate(['/login']);
        }
    }
}
