import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2> Welcome {{name}}</h2>
  			<input [id]="myId" type="text" value="angular data">
  			<input id="{{myId}}" [disabled]="isDisabled" type="text" value="Angular">`,

  styleUrls: []
})
export class TestComponent implements OnInit {
  
  public name = "Angular 6";
  public myId = "testId";
  public isDisabled ="false";

  constructor() { }

  ngOnInit() {
  }

}
