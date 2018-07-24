import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { CategoryfivePage } from '../pages/categoryfive/categoryfive';
import { CategoryfourPage } from '../pages/categoryfour/categoryfour';
import { CategorythreePage } from '../pages/categorythree/categorythree';
import { CongradulationsPage } from '../pages/congradulations/congradulations';
import { CategoryPage } from '../pages/category/category';
import { TakeQuizStage1Page } from '../pages/take-quiz-stage1/take-quiz-stage1';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

