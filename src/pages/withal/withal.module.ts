import { AboutPageModule } from './../about/about.module';
import { InitialPageMenuPageModule } from './../initial-page-menu/initial-page-menu.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WithalPage } from './withal';

@NgModule({
  declarations: [
    WithalPage,
  ],
  imports: [
    IonicPageModule.forChild(WithalPage),
    InitialPageMenuPageModule,
    AboutPageModule
  ],
})
export class WithalPageModule {}
