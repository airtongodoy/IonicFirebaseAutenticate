import { WithalPage } from './../withal/withal';

import { PrincipalTabsPage } from './../principal-tabs/principal-tabs';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the InitialPageMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-initial-page-menu',
  templateUrl: 'initial-page-menu.html',
})
export class InitialPageMenuPage {
  rootPage: any; // = HomePage;
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private auth: AngularFireAuth,
              menu: MenuController) {
    
    this.rootPage = WithalPage;
    menu.enable(true);
    
    //this.navCtrl.push(HomePage);
  }

  openPerfil() {
    this.navCtrl.push(HomePage);
  }

  openSobre() {
    this.navCtrl.push(HomePage);
  }

  signOut() {
    this.auth.auth.signOut();
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }
  
}
