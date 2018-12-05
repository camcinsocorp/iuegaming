import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { SignOffPage } from './sign-off';

@NgModule({
  declarations: [
    SignOffPage,
  ],
  imports: [
    IonicPageModule.forChild(SignOffPage),
    TranslateModule.forChild()
  ],
})
export class SignOffPageModule {}
