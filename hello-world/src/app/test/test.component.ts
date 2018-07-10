import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2 [style.color]="hasError ? 'red' : 'green'">Style Binding 1</h2>
  			<h3 [style.color]="highLightColor">Style Binding 2</h3>
  			<h3 [ngStyle]="titleStyles">Style Binding 3</h3>`,
  styles: []
})
export class TestComponent implements OnInit {
	public name="Angular6";
	public hasError = true;
	public highLightColor= "orange";
	public titleStyles = {
	color: "blue",
	fontStyle : "italic"
	}
  constructor() { }

  ngOnInit() {
  }

}
