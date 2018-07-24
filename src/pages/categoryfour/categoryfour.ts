import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { CategoryfivePageModule } from '../categoryfive/categoryfive.module';
import { CategoryfivePage } from '../categoryfive/categoryfive';
import { CongradulationsPage } from '../congradulations/congradulations';

/**
 * Generated class for the CategoryfourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoryfour',
  templateUrl: 'categoryfour.html',
})
export class CategoryfourPage {

  Answer = 0;
  option1;
  option2;
  option3;
  option4;
  option5;
  constructor(public navCtrl: NavController, public navParams: NavParams, public navAlert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryfourPage');
  }

  alert(){
    const prompt = this.navAlert.create({
      title:'category one',
      message:'You have passed category four!',
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
    if (this.option1 == 'A') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option2 == 'D1') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option3 == 'A2') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option4 == 'C3') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option5 == 'C4') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }


    if (this.Answer == 5) {
      this.alert();
      this.navCtrl.push(CategoryfivePage);
    }

    
  }
}
