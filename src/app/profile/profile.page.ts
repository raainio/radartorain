import { Component, OnInit } from '@angular/core';
import {version} from "../shared/version.const";

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {

  public appVersion = version;
  constructor() {
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/profile', JSON.stringify(item)]);
  // }
}
