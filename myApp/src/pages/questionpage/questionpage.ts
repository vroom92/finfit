import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { SfPage } from '../sf/sf';
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
  tags = ['Banking', 'Investments', 'Mortgage', 'How do I check my credit score?'];
  public myVar: boolean= false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  onChange(val){
    console.log(this.tags);
  }

  submitForm(){
    //Implement Loading shit
    let loader = this.loadingCtrl.create({
  content: "Please wait while we create your personal hike to learning...",
  duration: 2000
});

loader.onDidDismiss(() => {
console.log('Dismissed loading');
this.myVar=true;
});

  loader.present();


  }

  gototrail3(){
    this.navCtrl.setRoot('SfPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionpagePage');
  }

}
