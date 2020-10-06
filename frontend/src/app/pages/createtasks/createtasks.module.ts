import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatetasksPageRoutingModule } from './createtasks-routing.module';

import { CreatetasksPage } from './createtasks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatetasksPageRoutingModule
  ],
  declarations: [CreatetasksPage]
})
export class CreatetasksPageModule {}
