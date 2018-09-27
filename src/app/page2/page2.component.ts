import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  warning: boolean;
  access: boolean;
  model: any;

  constructor() {
   }

  ngOnInit() {
    let retrievedObject = sessionStorage.getItem('model');
    this.model = JSON.parse(retrievedObject) || {};
  }

  accessToImage(){
    if(this.model.age >=18){
      this.access = true;
    } else {
      this.warning = true;
    }
  }

}
