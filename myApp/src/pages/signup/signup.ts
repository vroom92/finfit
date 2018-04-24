import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import {FormBuilder, Validators} from '@angular/common';
import { LoginPage} from '../login/login';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
@Injectable()
export class SignupPage {

  img1:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  confirmEmailAlert() {
    let alert = this.alertCtrl.create({
      title: 'Verification',
      subTitle: '<br>A confirmation E-mail has been sent to your registered mail id!',
      buttons: [
        {
          text: 'OKAY',
          handler: data => {
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }
  signup(data){

    console.log("here");
    this.confirmEmailAlert();

	}

  fileChange(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
      let fileList: FileList = event.target.files;
      let file: File = fileList[0];
      console.log(file);
  }


}
