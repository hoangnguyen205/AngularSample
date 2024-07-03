import { Component } from '@angular/core';
import { randomInt } from 'crypto';

@Component({
  selector: 'app-hvn',
  templateUrl: './hvn.component.html',
  styleUrl: './hvn.component.scss'
})
export class HvnComponent {

  users = [
    {name: "a1" , age : 21},
    {name: "a2" , age : 22},
    {name: "a4" , age : 23},
  ]

  labelClass = 'labelClass';
  labelContent = 'labelContent';
  inputContent = '';

  changeLabelHandler() {
    this.labelContent += Math.random();
  }

}
