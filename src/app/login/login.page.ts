import {Component, OnInit} from '@angular/core';
import {Network} from '@ionic-native/network/ngx';
import {NavController} from '@ionic/angular';
import {FidjService} from 'fidj';
import {Subscription} from 'rxjs';
import {version} from '../shared/version.const';
import {Profile} from '../../app/shared/profile.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.page.html',
    styleUrls: ['login.page.scss'],
})
export class LoginPage implements OnInit {

    public appVersion = version;
    private connected: Subscription;

    constructor(private router: Router,
                private network: Network,
                private profile: Profile,
                private fidjService: FidjService) {

    }

    ngOnInit() {

        this.fidjService.logout(); // todo force logout
        /*
        if (this.fidjService.isLoggedIn()) {
            this.router.navigate(['/home']);
        }
        this.connected = this.network.onConnect().subscribe(data => {
            console.log(data);
            if (this.fidjService.isLoggedIn()) {
                this.router.navigate(['/home']);
            }
        }, error => console.error(error));
        */
    }

    async login(email, pwd) {
        this.profile.setEmail(email);
        try {
            await this.fidjService.login(email, pwd);
            this.router.navigate(['/home']);
        } catch (err) {
            alert(JSON.stringify(err));
        }
    }

    async loginAsDemo() {
        this.profile.setEmail('demo user');
        try {
            await this.fidjService.loginAsDemo();
            this.router.navigate(['/home']);
        } catch (err) {
            alert(JSON.stringify(err));
        }
    }

}
