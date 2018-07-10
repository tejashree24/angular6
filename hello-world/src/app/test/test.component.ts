import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h6>Template Reference Variable</h6>
  			<input #myMsg type="text">
  			<button (click)="myMessage(myMsg.value)">Click</button>`,
  styles: []
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myMessage(value){
  	console.log(value);
  }

}
