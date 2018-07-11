import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2 *ngIf="true"> ngIf directive with true value </h2>
  			 <h2 *ngIf="false"> ngIf directive with false value</h2>
  			 
  			 <h2 *ngIf="displayName; else elseBlock"> abcd </h2>

  			 <ng-template #elseBlock>
  			 	<h2>
  			 		Name is hidden
  			 	</h2>
  			 </ng-template>

  			 <h3 *ngIf="displayName; then thenblock ; else elseblock"></h3>

  			 <ng-template #thenblock> thenBlock </ng-template>
  			 <ng-template #elseblock> elseBlock </ng-template>

  			 `,
  styles: [``]
})
export class TestComponent implements OnInit {

   displayName = true;

  constructor() { }

  ngOnInit() {
  }

}
