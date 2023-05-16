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

  onButtonClick(value: string) {
   if (value === 'C') {
      this.result = '';
      this.input = '';
    } else if (value === 'X'){
      if (this.input !="" ) {
        this.input = this.input.substr(0, this.input.length-1);
      }
      if (this.result !=""){
        this.result = eval(this.input); 
      }
    } else {
      this.input += value;
      this.result = eval(this.input);
    }
  }
}
