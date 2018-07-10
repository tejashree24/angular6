import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2> Welcome to {{name}}</h2>
  			 <h2 class="text-success"> Simple CLass Example</h2>
  			 <h2 [class]="successClass"> Class Binding Example</h2>
  			 <h2 [class.text-danger]="hasError"> Class Has Error </h2>
  			 <h2 [ngClass]="messageClasses"> Multiple Class example with ng class</h2>`,

  styles: [`.text-success{
  			color:green;
  			},
  			.text-danger{
  			color:red;
  			},
  			.text-special{
  			font-style:italic;
  			}
  		`]
})

export class TestComponent implements OnInit {
	public name="Angular 6";
	public successClass="text-success"; 
	public hasError = false;
	public isSpecial = true;

	public messageClasses = {
		"text-success": !this.hasError,
		"text-danger": this.hasError,
		"text-special": this.isSpecial 
	}
  constructor() { }
  ngOnInit() {
  }

}
