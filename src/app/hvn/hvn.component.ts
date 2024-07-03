import { randomInt } from 'crypto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hvn',
  templateUrl: './hvn.component.html',
  styleUrl: './hvn.component.scss'
})
export class HvnComponent {

  @Input() parentValue = 0;

  users = [
    {name: "a1" , age : 21},
    {name: "a2" , age : 22},
    {name: "a4" , age : 23},
  ]

  labelClass = 'labelClass';
  labelContent = 0;
  inputContent = '';

  changeLabelHandler() {
    this.labelContent = Math.random();
  }

}
