import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2> Component example </h2>
  			<h4> {{"Hello " + parentData}}</h4>
  			<button (click)="fireEvent()">Send Event</button>`,
  styles: []
})
export class TestComponent implements OnInit {

  @Input('parentData') public name; 
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent(){
  	this.childEvent.emit('Hey codevolution');
  }

}
