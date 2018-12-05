import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigurationsPage } from './configurations';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ConfigurationsPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigurationsPage),
     TranslateModule.forChild()
  ],
})
export class ConfigurationsPageModule {}
