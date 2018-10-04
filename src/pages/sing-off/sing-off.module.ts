import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingOffPage } from './sing-off';

@NgModule({
  declarations: [
    SingOffPage,
  ],
  imports: [
    IonicPageModule.forChild(SingOffPage),
  ],
})
export class SingOffPageModule {}
