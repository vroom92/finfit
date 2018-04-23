import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the YosemitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 export interface Config {
	banking: string;
}

@IonicPage()
@Component({
  selector: 'page-yosemite',
  templateUrl: 'yosemite.html',
})
export class YosemitePage {
  public questions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _HTTP : HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad YosemitePage');
    this._HTTP
    .get<Config>('../../assets/data/questions.json')
    .subscribe((data) =>
    {
      this.questions=data.banking;
       console.log(this.questions[0].options);
    });
  }

}
