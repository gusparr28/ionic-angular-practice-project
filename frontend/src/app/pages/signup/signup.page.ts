import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnDestroy {

  username: String
  password: String;
  rePassword: String;
  date: String;
  gender: String;

  constructor(public modalController: ModalController) { }

  ngOnDestroy() {
    this.username = '';
    this.password = '';
    this.rePassword = '';
    this.date = '';
    this.gender = '';
  };

  signUp() {
    console.log(this.username, this.password, this.rePassword, this.date.split('T')[0], this.gender);
    if (this.password != this.rePassword) {
      this.presentModal();
    };
  };

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
    });
    return await modal.present();
  };
}
