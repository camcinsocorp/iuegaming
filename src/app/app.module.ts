import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Items } from '../mocks/providers/items';
import { Settings, Api } from '../providers';
import { MyApp } from './app.component';
import { RecoverPage } from '../pages/recover/recover';
import { RecoverPageModule } from '../pages/recover/recover.module';
import { InicioPageModule } from '../pages/inicio/inicio.module';
import { InicioPage } from '../pages/inicio/inicio';
import { MenuPageModule } from '../pages/menu/menu.module';
import { MenuPage } from '../pages/menu/menu';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { ProfilePage } from '../pages/profile/profile';
import { TopTenPageModule } from '../pages/top-ten/top-ten.module';
import { TopTenPage } from '../pages/top-ten/top-ten';
import { ConfigurationsPageModule } from '../pages/configurations/configurations.module';
import { ConfigurationsPage } from '../pages/configurations/configurations';
import { SingOffPageModule } from '../pages/sing-off/sing-off.module';
import { SingOffPage } from '../pages/sing-off/sing-off';
import { WelcomePage } from '../pages/welcome/welcome';

import { StartPage } from '../pages/start/start';
import { UserServicesProvider } from '../providers/services/user-services/user-services';
import { GlobalProvider } from '../providers/global/global';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    StartPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RecoverPageModule,
    InicioPageModule,
    MenuPageModule,
    ProfilePageModule,
    TopTenPageModule,
    ConfigurationsPageModule,
    SingOffPageModule,
    LoginPageModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecoverPage,
    InicioPage,
    MenuPage,
    ProfilePage,
    TopTenPage,
    ConfigurationsPage,
    SingOffPage,
    StartPage,
    LoginPage
  ],
  providers: [
    Api,
    Items,
    Camera,
    SplashScreen,
    StatusBar,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UserServicesProvider,
    GlobalProvider
  ]
})
export class AppModule { }
