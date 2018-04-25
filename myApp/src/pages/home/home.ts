import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  YosemitePage } from '../yosemite/yosemite';
import { ShastaPage } from '../shasta/shasta'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  galleryType = 'regular';
  constructor(public navCtrl: NavController) { }

  gototrail1(){
    //this.navCtrl.push(YosemitePage);
    this.navCtrl.setRoot(YosemitePage);
  }

  gototrail6(){
    this.navCtrl.setRoot(ShastaPage);
  }

}
