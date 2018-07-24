import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController} from 'ionic-angular';
import { CategorythreePage } from '../categorythree/categorythree';

/**
 * Generated class for the CategorytwoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorytwo',
  templateUrl: 'categorytwo.html',
})
export class CategorytwoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public navAlert: AlertController) {
  }

  Answer = 0;
  option1;
  option2;
  option3;
  option4;
  option5;


  ionViewDidLoad() {
    console.log('ionViewDidLoad CategorytwoPage');
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

    if (this.option3 == 'A2') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option4 == 'B3') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option5 == 'A4') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }


    if (this.Answer == 5) {
      this.alert();
      this.navCtrl.push(CategorythreePage);
    }

    
  }
}
