import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { TopTenPage } from './top-ten';

@NgModule({
  declarations: [
    TopTenPage,
  ],
  imports: [
    IonicPageModule.forChild(TopTenPage),
    TranslateModule.forChild()
  ],
})
export class TopTenPageModule {}
