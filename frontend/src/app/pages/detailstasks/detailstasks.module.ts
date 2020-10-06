import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailstasksPageRoutingModule } from './detailstasks-routing.module';

import { DetailstasksPage } from './detailstasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailstasksPageRoutingModule
  ],
  declarations: [DetailstasksPage]
})
export class DetailstasksPageModule {}
