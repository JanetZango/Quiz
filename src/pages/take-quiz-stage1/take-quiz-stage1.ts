import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import arr from '../../app/array';
import { CategoryPage } from '../category/category';

/**
 * Generated class for the TakeQuizStage1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-take-quiz-stage1',
  templateUrl: 'take-quiz-stage1.html',
})
export class TakeQuizStage1Page {

  Answer = 0;
  option1;
  option2;
  option3;
  option4;
  option5;

  constructor(public navCtrl: NavController, public navParams: NavParams, public navAlert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TakeQuizStage1Page');
  }

  alert(){
    const prompt = this.navAlert.create({
      title:'category one',
      message:'You have passed category one!',
      buttons:[
        {
          text:'Ok',
          handler: data =>{
            console.log('succesfully completed category one');
           
          }
        },
      ]
    });
   prompt.present();
  }

  


  addAnswers(){
    if (this.option1 == 'D') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option2 == 'B1') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option3 == 'A2') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option4 == 'D3') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option5 == 'D4') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }


    if (this.Answer == 5) {
      this.alert();
      this.navCtrl.push(CategoryPage);
    }

    
  }


}