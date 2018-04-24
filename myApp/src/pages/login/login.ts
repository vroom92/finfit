import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl : ModalController, public alertCtrl: AlertController) {
  }
  gotohome(){
    //this.navCtrl.push(HomePage);
    this.navCtrl.setRoot(HomePage);
  }
  loginPopUp() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            this.gotohome();
          }
        }
      ]
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  gotosignup(){
    this.navCtrl.setRoot(SignupPage);
  }

  public openModal(){
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

}
