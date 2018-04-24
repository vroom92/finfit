import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuestionpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questionpage',
  templateUrl: 'questionpage.html',
})
export class QuestionpagePage {
  tags = ['Ionic', 'Angular', 'TypeScript'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  onChange(val){
    console.log(this.tags);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionpagePage');
  }

}
