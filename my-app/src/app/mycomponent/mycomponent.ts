import { Component } from '@angular/core';

@Component({
    selector: 'Hello-world',
    templateUrl: './mycomponent.html',
    styles:['p{color: red;}']
})
export class Helloworld{
    dato= new Date();
}