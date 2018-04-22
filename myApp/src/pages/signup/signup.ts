import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/common';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
@Injectable()
export class SignupPage {

  img1:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(data){

    console.log("here");

			var link = 'C:\Users\Chirag\Downloads\error.json.txt';

			//using http post as we are passing password.
			this.http.post(link, {fn : data.fname, ln : data.lname, em: data.email, ps : data.password, cp: data.confirm, pic : data.photo })
			.then(function (res){	 //if a response is recieved from the server.

				$scope.response = res.data.result; //contains Register Result

				//Shows the respective popup and removes back link
				if($scope.response.created=="1"){
						$scope.title="Account Created!";
						$scope.template="Your account has been successfully created!";

						//no back option
						$ionicHistory.nextViewOptions({
							disableAnimate: true,
							disableBack: true
						});
						// the user is redirected to login page after sign up
						$state.go('login', {}, {location: "replace", reload: true});

				}else if($scope.response.exists=="1"){
					$scope.title="Email Already exists";
					$scope.template="Please click forgot password if necessary";

				}else{
					$scope.title="Failed";
					$scope.template="Contact Our Technical Team";
				}

				var alertPopup = $ionicPopup.alert({
						title: $scope.title,
						template: $scope.template
				});


			});
	}

  fileChange(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
      let fileList: FileList = event.target.files;
      let file: File = fileList[0];
      console.log(file);
  }


}
