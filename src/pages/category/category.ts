import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { CategorytwoPage } from '../categorytwo/categorytwo';

/**
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  Answer = 0;
  option1;
  option2;
  option3;
  option4;
  option5;


  constructor(public navCtrl: NavController, public navParams: NavParams, public navAlert: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }



  alert(){
    const prompt = this.navAlert.create({
      title:'category one',
      message:'You have passed category two!',
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

    if (this.option2 == 'D1') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option3 == 'A2') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option4 == 'A3') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }

    if (this.option5 == 'A4') {
      this.Answer = this.Answer + 1;
      console.log(this.Answer);
    }


    if (this.Answer == 5) {
      this.alert();
      this.navCtrl.push(CategorytwoPage);
    }

    
  }

}
