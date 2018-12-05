import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { TapPage } from './tap';

@NgModule({
  declarations: [
    TapPage,
  ],
  imports: [
    IonicPageModule.forChild(TapPage),
    TranslateModule.forChild()
  ],
})
export class TapPageModule {}
