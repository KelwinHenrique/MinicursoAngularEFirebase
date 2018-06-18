import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public title: string = 'String Interpolation';
  public url: string = 'https://www.google.com.br/';
 
  ngOnInit():void{
    var config = {
      apiKey: "AIzaSyBWiTcvTlbYR8BzzOjg8GG1D6mq-9b5_BQ",
      authDomain: "fireback1-aa50b.firebaseapp.com",
      databaseURL: "https://fireback1-aa50b.firebaseio.com",
      projectId: "fireback1-aa50b",
      storageBucket: "fireback1-aa50b.appspot.com",
      messagingSenderId: "260162269374"
    };
    firebase.initializeApp(config);
  }
}
