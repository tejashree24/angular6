import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  //index
  template: `<div *ngFor="let color of colors; index as i">
  				<h2>{{i}} {{color}}</h2>
  			 </div>`,

  //first
  // template: `<div *ngFor="let color of colors; first as f">
  // 				<h2>{{f}} {{color}}</h2>
  // 			 </div>`,

  //last
  // template: `<div *ngFor="let color of colors; last as l">
  // 				<h2>{{l}} {{color}}</h2>
  // 			 </div>`,

  //odd
  // template: `<div *ngFor="let color of colors; odd as o">
  // 				<h2>{{o}} {{color}}</h2>
  // 			 </div>`,

  //even
  // template: `<div *ngFor="let color of colors; even as e">
  // 				<h2>{{e}} {{color}}</h2>
  // 			 </div>`,
  styles: [``]
})
export class TestComponent implements OnInit {

   public colors = ["red","green","blue","yellow"];

  constructor() { }

  ngOnInit() {
  }

}
