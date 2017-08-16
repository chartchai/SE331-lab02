import {Component} from '@angular/core';
@Component({
 selector: 'time',
 template: `<h2>current time {{today | date:'shortTime'}}`
})
export class TimeComponent {	
	today:number = Date.now();
}