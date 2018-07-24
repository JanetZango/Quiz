import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CategoryfourPage } from '../categoryfour/categoryfour';

/**
 * Generated class for the CategorythreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorythree',
  templateUrl: 'categorythree.html',
})
export class CategorythreePage {

  Answer = 0;
  option1;
  option2;
  option3;
  option4;
  option5;


  constructor(public navCtrl: NavController, public navParams: NavParams, public navAlert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategorythreePage');
  }

  alert(){
    const prompt = this.navAlert.create({
      title:'category one',
      message:'You have passed category three!',
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
    if (this.option1 == 'B') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option2 == 'A1') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option3 == 'B2') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option4 == 'A3') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option5 == 'C4') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }


    if (this.Answer == 5) {
      this.alert();
      this.navCtrl.push(CategoryfourPage);
    }

    
  }
}
