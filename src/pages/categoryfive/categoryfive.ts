import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CongradulationsPage } from '../congradulations/congradulations';

/**
 * Generated class for the CategoryfivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoryfive',
  templateUrl: 'categoryfive.html',
})
export class CategoryfivePage {


  Answer = 0;
  option1;
  option2;
  option3;
  option4;
  option5;

  constructor(public navCtrl: NavController, public navParams: NavParams,public navAlert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryfivePage');
  }


  alert(){
    const prompt = this.navAlert.create({
      title:'category one',
      message:'You have passed category five!',
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
    if (this.option1 == 'C') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option2 == 'A1') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option3 == 'C2') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option4 == 'B3') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option5 == 'B4') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }


    if (this.Answer == 5) {
      this.alert();
      this.navCtrl.push(CongradulationsPage);
    }

    
  }
}
