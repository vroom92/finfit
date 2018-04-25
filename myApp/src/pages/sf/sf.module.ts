import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SfPage } from './sf';

@NgModule({
  declarations: [
    SfPage,
  ],
  imports: [
    IonicPageModule.forChild(SfPage),
  ],
})
export class SfPageModule {}
