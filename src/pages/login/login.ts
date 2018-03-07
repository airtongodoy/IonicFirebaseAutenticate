import { HomePage } from './../home/home';

import { AngularFireAuth } from 'angularfire2/auth';
// login.ts
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { User } from '../../shared/models/user';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginData = {
    email: '',
    password: ''
  };
  user = {} as User;

  constructor(public navCtrl: NavController,
              private afAuth: AngularFireAuth, 
              private toastCtrl: ToastController) { 

    this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
      .then(auth => {
        // Do custom things with auth
      })
      .catch(err => {
        // Handle error
        let toast = this.toastCtrl.create({
          message: err.message,
          duration: 2500
        });
        toast.present();
      });
  }

  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password);
      if (result) {
        this.navCtrl.setRoot(HomePage);
      }
    }
    catch (e) {
      let msgErro = e.code;
      //
      if (e.message == 'signInWithEmailAndPassword failed: First argument "email" must be a valid string.') {
        msgErro = 'Por favor preencha o e-mail';
      }
      if (e.message == 'The email address is badly formatted.') {
        msgErro = 'E-mail inválido!';
      }
      
      if (e.message == 'signInWithEmailAndPassword failed: Second argument "password" must be a valid string.') {
        msgErro = 'Por favor preencha a senha!';
      }

      if (e.code == 'auth/user-not-found' || e.code == 'auth/wrong-password') {
        msgErro = 'Usuário/Senha inválidos!';
      }

      this.toastCtrl.create({ message: '' + msgErro, duration: 3000 }).present();
      console.error(msgErro);
      console.error(e);
    }
  }

  signup() {
    this.navCtrl.push(SignupPage, { email: this.loginData.email });
  }
}