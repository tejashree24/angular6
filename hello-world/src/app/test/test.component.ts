import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2> Welcome to {{name}}</h2>
  			<p>*** With Handler ***</p>
  			<button (click)="onClick($event)">Greet</button>
  			<span>Type of Event:</span> {{eventtype}}
  			<br><br>
  			<p>***Without Handler***</p>
  			<button (click)="data ='Welcome to Angular 6 Event Binding without handler'">greet</button>
  			{{data}}`,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
	public name="Event Binding!";
	public data="";
	public greeting = "";

	onClick(event){
		console.log(event);

		console.log("clicked on Button!");
		this.greeting="greetings are here!";
		this.eventtype=event.type;
	}

  constructor() { }

  ngOnInit() {
  }

}
