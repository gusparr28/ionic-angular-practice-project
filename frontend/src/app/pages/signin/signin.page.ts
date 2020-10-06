import { Component, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnDestroy {

  username: String;
  password: String;
  showPassword: boolean = false;
  passwordToggleIcon: String = 'eye-outline';

  constructor(public modalController: ModalController) { }

  ngOnDestroy() {
    this.username = '';
    this.password = '';
  };

  signIn() {
    console.log(this.username, this.password);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
    if (this.passwordToggleIcon == 'eye-outline') {
      this.passwordToggleIcon = 'eye-off-outline';
    } else {
      this.passwordToggleIcon = 'eye-outline';
    }
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
    });
    return await modal.present();
  };

}
