import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TakeQuizStage1Page } from '../take-quiz-stage1/take-quiz-stage1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  nextpage(){
    this.navCtrl.push(TakeQuizStage1Page);
  }

}
