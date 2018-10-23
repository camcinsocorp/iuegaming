import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { StartDailyPage } from './start-daily';

@NgModule({
  declarations: [
    StartDailyPage,
  ],
  imports: [
    IonicPageModule.forChild(StartDailyPage),
    TranslateModule.forChild()
  ],
})
export class StartDailyPageModule {}
