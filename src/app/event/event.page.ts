import {Component, OnInit} from '@angular/core';
import {EventNode, FidjStorageNode} from "../shared/fidj-storage.model";
import {ModalController} from "@ionic/angular";
import {Profile} from "../shared/profile.service";

@Component({
    selector: 'app-event',
    templateUrl: 'event.page.html',
    styleUrls: ['event.page.scss']
})
export class EventPage implements OnInit {
    private selectedItem: any;
    public data: FidjStorageNode;

    constructor(private profile: Profile) {

    }

    ngOnInit() {
        this.profile.refreshProfile().then((data) => {
            this.data = data;
        });
    }

    clickOnEvent(item: EventNode) {
        item.red = true;
        this.profile.storeAll();
    }
}
