import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TakeQuizStage1Page } from '../pages/take-quiz-stage1/take-quiz-stage1';
import { CategoryPage } from '../pages/category/category';
import { CategorytwoPage } from '../pages/categorytwo/categorytwo';
import { CategorythreePage } from '../pages/categorythree/categorythree';
import { CategoryfourPage } from '../pages/categoryfour/categoryfour';
import { CategoryfivePage } from '../pages/categoryfive/categoryfive';
import { CongradulationsPage } from '../pages/congradulations/congradulations';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TakeQuizStage1Page,
    CategoryPage,
    CategorytwoPage,
    CategorythreePage,
    CategoryfourPage,
    CategoryfivePage,
    CongradulationsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TakeQuizStage1Page,
    CategoryPage,
    CategorytwoPage,
    CategorythreePage,
    CategoryfourPage,
    CategoryfivePage,
    CongradulationsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
