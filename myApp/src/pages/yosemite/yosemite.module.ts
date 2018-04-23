import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YosemitePage } from './yosemite';

@NgModule({
  declarations: [
    YosemitePage,
  ],
  imports: [
    IonicPageModule.forChild(YosemitePage),
  ],
})
export class YosemitePageModule {}
