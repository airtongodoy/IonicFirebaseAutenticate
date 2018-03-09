import { InthesalePage } from './../inthesale/inthesale';
import { WithalPage } from './../withal/withal';
import { OthersPage } from './../others/others';
import { NewsPage } from './../news/news';
import { PrincipalPage } from './../principal/principal';
import { HomePage } from './../home/home';
// import { InitialPageMenuPage } from './../initial-page-menu/initial-page-menu';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InitialPageMenuPage } from '../initial-page-menu/initial-page-menu';

/**
 * Generated class for the PrincipalTabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal-tabs',
  templateUrl: 'principal-tabs.html',
})
export class PrincipalTabsPage {

  tab1Root = PrincipalPage;
  tab2Root = NewsPage;

  tab3Root = InthesalePage;

  tab4Root = OthersPage;
  tab5Root = InitialPageMenuPage;//WithalPage;

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalTabsPage');
  }

}
