import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {EventPage} from './event.page';
import {HasBeenRed, HaveBeenRed, HaveNotBeenRed} from "./event.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventPage
      }
    ])
  ],
  exports: [
    HaveNotBeenRed
  ],
  declarations: [
    EventPage,
    HaveBeenRed,
    HaveNotBeenRed,
    HasBeenRed
  ]
})
export class EventPageModule {
}
