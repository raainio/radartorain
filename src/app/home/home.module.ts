import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {HomePage} from './home.page';
import {NewInstancePage} from './modals/new-instance.page';
import {
    EventHaveNotBeenRed,
    HasGoodQuality,
    IsInProgressPipe,
    IsReady,
    IsStopped,
    ProgressBuffer,
    ProgressValue
} from "./home.pipe";
import {EventPageModule} from "../event/event.module";
import {HaveBeenRed} from "../event/event.pipe";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            },
            {
                path: '/new-instance',
                component: NewInstancePage
            }
        ])
    ],
    declarations: [
        HomePage,
        NewInstancePage,
        IsStopped,
        IsInProgressPipe,
        IsReady,
        HasGoodQuality,
        ProgressValue,
        ProgressBuffer,
        EventHaveNotBeenRed
    ]
})
export class HomePageModule {
}
