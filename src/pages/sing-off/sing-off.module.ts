import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { SingOffPage } from './sing-off';

@NgModule({
  declarations: [
    SingOffPage,
  ],
  imports: [
    IonicPageModule.forChild(SingOffPage),
    TranslateModule.forChild()
  ],
})
export class SingOffPageModule {}
