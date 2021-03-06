import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Content } from 'ionic-angular';
import { ScoreBoardPage } from '../score-board/score-board';
import { QuestionpagePage } from '../questionpage/questionpage';

/**
 * Generated class for the CustomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 export interface Config {
	banking: string;
  leaderboard: string;
}
// export interface Config {
//  leaderboard: string;
// }
 export interface CountdownTimer {
   seconds: number;
   secondsRemaining: number;
   runTimer: boolean;
   hasStarted: boolean;
   hasFinished: boolean;
   displayTime: string;
 }

@IonicPage()
@Component({
  selector: 'page-custom',
  templateUrl: 'custom.html',
})
export class CustomPage {
  @ViewChild(Content) content: Content;
  public tscore: number = 0;
  public config : Config;
  public questions: any;
  public progress: number;
  public scroller: number =0;
  public audio : any;
  public audio2 : any ;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public _HTTP : HttpClient ) {
  }

  timeInSeconds: number= 15;
  timer: CountdownTimer;
  questionNumber: number=1;

  presentAlert(text) {
    let alert = this.alertCtrl.create({
      title: '<center>ScoreBoard</center>',
      subTitle: text,
      buttons: [
        {
          text: 'OKAY',
          handler: data => {
            this.goToNext();
          }
        }
      ]
    });
    alert.present();
  }

  lastAlert(text) {
    this.audio2.pause();
    let alert = this.alertCtrl.create({
      title: '<center>ScoreBoard</center>',
      subTitle: text,
      buttons: [
        {
          text: 'ScoreBoard',
          handler: data => {
            this.navCtrl.setRoot(ScoreBoardPage);
          }
        },
        {
          text: 'Ask a Question',
          handler: data => {
            this.navCtrl.setRoot(QuestionpagePage);
          }
        }
      ]
    });
    alert.present();
  }

  goToNext(){
    this.initTimer();
    this.startTimer();
    this.scroller=this.scroller+810;
    this.content.scrollTo(0,this.scroller,1000);
  }
  hasFinished() {
    return this.timer.hasFinished;
  }

  initTimer() {
    if (!this.timeInSeconds) { this.timeInSeconds = 0; }

    this.timer = <CountdownTimer>{
      seconds: this.timeInSeconds,
      runTimer: false,
      hasStarted: false,
      hasFinished: false,
      secondsRemaining: this.timeInSeconds
    };

    this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
  }

  startTimer() {
    this.timer.hasStarted = true;
    this.timer.runTimer = true;
    this.timerTick();
  }

  pauseTimer() {
    this.timer.runTimer = false;
  }

  resumeTimer() {
    this.startTimer();
  }

  timerTick() {
    setTimeout(() => {
      if (!this.timer.runTimer) { return; }
      this.timer.secondsRemaining--;
      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
      if (this.timer.secondsRemaining > 0) {
        this.timerTick();
      } else {
        this.timer.hasFinished = true;
      }
    }, 1000);
  }

  ngOnInit() {
    this.initTimer();
    this.progress=0;
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
    const secNum = parseInt(inputSeconds.toString(), 10); // don't forget the second param
    const hours = Math.floor(secNum / 3600);
    const minutes = Math.floor((secNum - (hours * 3600)) / 60);
    const seconds = secNum - (hours * 3600) - (minutes * 60);
    let hoursString = '';
    let minutesString = '';
    let secondsString = '';
    hoursString = (hours < 10) ? '0' + hours : hours.toString();
    minutesString = (minutes < 10) ? '0' + minutes : minutes.toString();
    secondsString = (seconds < 10) ? '0' + seconds : seconds.toString();
    return hoursString + ':' + minutesString + ':' + secondsString;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomPage');
    this.audio2 = new Audio();
    this.audio2.src = "../../../assets/sounds/loop.mp3";
    this.audio2.load();
    this.audio2.play();
    this._HTTP
    .get<Config>('../../assets/data/loancredit.json')
    .subscribe((data) =>
    {
      this.questions=data.banking;
       console.log(this.questions[0].options);
    });
    this.startTimer();
  }

  changeProgress(userchoice,id){
    console.log(userchoice,id);
    console.log(this.questions[id-1].answer);
    // this.nativeAudio.preloadSimple('uniqueId1', '../../assets/sounds/correct.mp3');
    // this.nativeAudio.play('uniqueId1');
    this.pauseTimer();
    if(userchoice===this.questions[id-1].answer){
      this.audio = new Audio();
      this.audio.src = "../../../assets/sounds/correct-2.wav";
      this.audio.load();
      this.audio.play();
      this.tscore += 10*this.timer.secondsRemaining;
      this.presentAlert("<b>Nice Correct Answer!</b><br><br>"+"Score for this question "+
      10*this.timer.secondsRemaining+"<br><br>Total Score " +this.tscore+"<br><br><b>Explanation:</b> "+
      this.questions[id-1].description);
    }
    else{
      this.audio = new Audio();
      this.audio.src = "../../../assets/sounds/wrong.wav";
      this.audio.load();
      this.audio.play();
      this.tscore+=0;
      this.presentAlert("<b>Oops Incorrect Answer!</b><br><br>"+"Score for this question 0"+"<br><br>Total Score "
      +this.tscore+"<br><br><b>Explanation:</b> "+this.questions[id-1].description);
    }
    this.progress+=20;

    //this.startTimer();

  }

  changeProgressFinal(userchoice,id){
    console.log(userchoice,id);
    console.log(this.questions[id-1].description);
    this.pauseTimer();
    if(userchoice===this.questions[id-1].answer){
      this.audio = new Audio();
      this.audio.src = "../../../assets/sounds/correct-2.wav";
      this.audio.load();
      this.audio.play();
      this.tscore += 10*this.timer.secondsRemaining;
      this.lastAlert("<b>Nice Correct Answer!</b><br><br>"+"Score for this question "+
      10*this.timer.secondsRemaining+"<br><br>Total Score " +this.tscore+"<br><br><b>Explanation:</b> "+
      this.questions[id-1].description);
    }
    else{
      this.audio = new Audio();
      this.audio.src = "../../../assets/sounds/wrong.wav";
      this.audio.load();
      this.audio.play();
      this.tscore+=0;
      this.lastAlert("<b>Oops Incorrect Answer!</b><br><br>"+"Score for this question 0"+"<br><br>Total Score "
      +this.tscore+"<br><br><b>Explanation:</b> "+this.questions[id-1].description);
    }
    this.progress+=20;

    //this.startTimer();

  }

}
