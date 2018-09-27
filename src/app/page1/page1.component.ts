import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  model: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
    }

  ngOnInit() {
    let retrievedObject = sessionStorage.getItem('model');
    this.model = JSON.parse(retrievedObject) || {};
  }

  onSubmit() {
    this.router.navigate(['page2']);   
    let sessionModel =  sessionStorage.setItem('model' ,JSON.stringify(this.model));
  }
}