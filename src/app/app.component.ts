import {Component} from '@angular/core';
@Component({
 selector: 'my-app',
 template: `<h1>Hello {{name}}</h1>
	<students></students><br/>
	<time></time>`
})
export class AppComponent {
	name = 'SE331';	
}