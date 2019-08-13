import { Component, OnInit } from '@angular/core';
import {FidjStorageNode} from "../shared/fidj-storage.model";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";
import {Profile} from "../shared/profile.service";

@Component({
  selector: 'app-radar',
  templateUrl: 'radar.page.html',
  styleUrls: ['radar.page.scss']
})
export class RadarPage implements OnInit {

  public refreshInProgress = false;
  public data: FidjStorageNode;

  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];


  constructor(private router: Router,
              private profile: Profile) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/radar', JSON.stringify(item)]);
  // }


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
