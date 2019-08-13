import {Injectable} from '@angular/core';
import {LocalStorage} from 'fidj';

@Injectable()
export class Storage extends LocalStorage {

    constructor() {
        super(window.localStorage, 'RadarToRain_bot_client.');
    }
}

