import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {  YosemitePage } from '../yosemite/yosemite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  galleryType = 'regular';
  constructor(public navCtrl: NavController) { }

  gototrail(){
    this.navCtrl.push(YosemitePage);
  }
}
