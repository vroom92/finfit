import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ScoreBoardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 export interface Config {
	leaderboard: string;
}

@IonicPage()
@Component({
  selector: 'page-score-board',
  templateUrl: 'score-board.html',
})
export class ScoreBoardPage {
  public config : Config;
  public columns : any;
  public rows : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public _HTTP   	: HttpClient) {
    this.columns = [
        { prop: 'Rank' },
        { name: 'Name' },
        { name: 'Points' }
      ];
  }

  ionViewDidLoad() : void
   {
      this._HTTP
      .get<Config>('../../assets/data/leaderboard.json')
      .subscribe((data) =>
      {
         this.rows = data.leaderboard;
      });

   }

}
