import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ProgressBarModule } from "angular-progress-bar";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ModalPage } from '../pages/modal/modal';
import { ScoreBoardPage } from '../pages/score-board/score-board';
import { YosemitePage } from '../pages/yosemite/yosemite';
import { ProfilePage } from '../pages/profile/profile';
import { QuestionpagePage } from '../pages/questionpage/questionpage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SignupPage } from '../pages/signup/signup';
import { HttpClientModule } from '@angular/common/http';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {IonTagsInputModule} from "ionic-tags-input";
import { CustomPage } from "../pages/custom/custom";
import { ShastaPage } from "../pages/shasta/shasta";


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ModalPage,
    ScoreBoardPage,
    YosemitePage,
    ProfilePage,
    QuestionpagePage,
    CustomPage,
    ShastaPage

    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    NgxDatatableModule,
    ProgressBarModule,
    IonTagsInputModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    SignupPage,
    ModalPage,
    ScoreBoardPage,
    YosemitePage,
    ProfilePage,
    QuestionpagePage,
    CustomPage,
    ShastaPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
