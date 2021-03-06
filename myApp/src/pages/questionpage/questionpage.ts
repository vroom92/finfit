import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
//import { HomePage } from '../home/home';
import { CustomPage } from "../custom/custom";
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
  tags = ['Banking', 'Investments'];
  public myVar: boolean= false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }
  onChange(val){
    console.log(this.tags);
  }

  submitForm(){
    //Implement Loading shit
    let loader = this.loadingCtrl.create({
  content: "<h5><b>Please wait while we create your personal hike to learning...</b></h5>",
  duration: 2000
});

loader.onDidDismiss(() => {
console.log('Dismissed loading');
this.myVar=true;
});

  loader.present();


  }

  gototrail5(){
    this.navCtrl.setRoot(CustomPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionpagePage');
  }

}
