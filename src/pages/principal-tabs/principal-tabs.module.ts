import { InitialPageMenuPageModule } from './../initial-page-menu/initial-page-menu.module';
import { WithalPageModule } from './../withal/withal.module';
import { OthersPageModule } from './../others/others.module';
import { InthesalePageModule } from './../inthesale/inthesale.module';
import { NewsPageModule } from './../news/news.module';
import { PrincipalPageModule } from './../principal/principal.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrincipalTabsPage } from './principal-tabs';

@NgModule({
  declarations: [
    PrincipalTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(PrincipalTabsPage),
    InitialPageMenuPageModule,
    PrincipalPageModule,
    NewsPageModule,
    InthesalePageModule,
    OthersPageModule,
    WithalPageModule
  ]
})
export class PrincipalTabsPageModule {}
