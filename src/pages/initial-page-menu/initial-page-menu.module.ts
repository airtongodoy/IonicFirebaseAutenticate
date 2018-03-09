import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InitialPageMenuPage } from './initial-page-menu';

@NgModule({
  declarations: [
    InitialPageMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(InitialPageMenuPage),
  ],
})
export class InitialPageMenuPageModule {}
