import { PrincipalTabsPage } from './../pages/principal-tabs/principal-tabs';
// import { InitialPageMenuPage } from './../pages/initial-page-menu/initial-page-menu';
import { LoginPage } from './../pages/login/login';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform, 
              private afAuth: AngularFireAuth, 
              private statusBar: StatusBar, 
              private splashscreen: SplashScreen) {

    this.afAuth.authState.subscribe(auth => {
      if (!auth)
        this.rootPage = LoginPage;
      else
        this.rootPage = PrincipalTabsPage;
    });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashscreen.hide();
    });
  }
}

