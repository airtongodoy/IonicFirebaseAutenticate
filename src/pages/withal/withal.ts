import { HomePage } from './../home/home';
import { AboutPage } from './../about/about';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the WithalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-withal',
  templateUrl: 'withal.html',
})
export class WithalPage {

  public items1 = ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4', 'Opção 5', 'Opção 6', 'Opção 7'];
  public items = [
    { title: 'Sobre nós', component: AboutPage, class: 'bbb' },
    { title: 'Home Page', component: HomePage, class: 'aaa' },
  ]
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public actionSheetCtrl: ActionSheetController,
              private auth: AngularFireAuth) {
    
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        }, {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Logout',
          role: 'logout',
          handler: () => {
            this.auth.auth.signOut();
          }
        }
      ]
    });
    actionSheet.present();
  }

  optionsMenu (){
    this.presentActionSheet();
  }

  itemSelected(page) {
    this.navCtrl.push(page.component);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WithalPage');
  }


}