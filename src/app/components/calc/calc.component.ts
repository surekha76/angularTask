import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  result: string = '';
  input: string = '';

  onKeyPress(event: KeyboardEvent) {
    const input = event.key;
    const regex = /^[\d\(\)\-+*/%.]+$/m;
    if (!regex.test(input)) {
      event.preventDefault();
    }
    if (input == '=') {
      this.result = eval(this.input);
    }
  }

  onButtonClick(value: string) {
    if (value == '='){
      this.result = eval(this.input);
    } else {
      this.input += value;
    }
  }
  clear(){
    this.result = '';
    this.input = '';
  }
  delete(){
    this.input = this.input.slice(0, -1);
  }
}
