import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailstasksPage } from './detailstasks.page';

const routes: Routes = [
  {
    path: '',
    component: DetailstasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailstasksPageRoutingModule {}
