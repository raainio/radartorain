import {Injectable} from '@angular/core';
import {Storage} from './storage.service';
import {FidjService} from 'fidj';
// import {BehaviorSubject, Observable} from 'rxjs';
// import {FidjStorage} from './fidj-storage.model';
import {EndpointInterface} from 'fidj/sdk/interfaces';
import {Profile} from './profile.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class Radar {

    constructor(private storage: Storage,
                private fidjService: FidjService,
                private profileService: Profile,
                private http: HttpClient) {
        console.log('Radar service');
    }
}

