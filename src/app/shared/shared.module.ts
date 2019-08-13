import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule, NgStyle} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {FidjModule} from 'fidj';

import {Profile} from './profile.service';
import {Storage} from './storage.service';
import {Radar} from './radar.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FidjModule,
    ],
    providers: [
        Profile,
        Storage,
        Radar
    ],
    exports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        // IonicModule,
        FidjModule,
        NgStyle
    ]
})
export class SharedModule {
}
