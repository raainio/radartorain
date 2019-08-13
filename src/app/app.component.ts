import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {Network} from '@ionic-native/network/ngx';

import {FidjService} from 'fidj';
import {Subscription} from 'rxjs';
import {Profile} from './shared/profile.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    private connected: Subscription;
    public appPages = [
        {
            title: 'Dashboard',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Radar',
            url: '/radar',
            icon: 'wifi'
        },
        {
            title: 'Rain',
            url: '/rain',
            icon: 'arrow-dropdown-circle'
        },
        {
            title: 'Profile',
            url: '/profile',
            icon: 'contact'
        },
        {
            title: 'Events',
            url: '/event',
            icon: 'notifications-outline'
        },
        {
            title: 'Sign out',
            url: '/login',
            icon: 'unlock'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private fidjService: FidjService,
        private router: Router,
        private network: Network,
        public profile: Profile
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.initFidj();
            this.connected = this.network.onConnect().subscribe(data => {
                this.initFidj();
            }, error => console.error(error));

        });
    }

    initFidj() {

        this.fidjService.init('fidj-a9316cfb9ff9fd32', {prod: true, logLevel: 1})
            .then(() => {
                this.connected.unsubscribe();
                this.profile.readyForSync.next(true);
                if (!this.fidjService.isLoggedIn()) {
                    this.router.navigate(['/login']);
                }
            })
            .catch((err) => {
                // alert(JSON.stringify(err));
                console.error('initFidj catch pb: ', err);
                this.profile.readyForSync.next(false);
                if (!this.fidjService.isLoggedIn()) {
                    this.router.navigate(['/login']);
                }
            });
    }
}
