import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  timerValue: number = 0;
  private timerSubscription: Subscription;
  timerRunning: boolean = true;

  ngOnInit() {
  }
  start(){
    this.timerSubscription = interval(1000).subscribe(() => {
      if(this.timerRunning){
        this.timerValue++;
      }
    });
  }

  pause() {
    if (this.timerRunning) {
      this.timerSubscription.unsubscribe();
     this.timerRunning = false;
    } else{
      this.start();
      this.timerRunning = true;
    }
  }
  resume(){
    this.start();
    this.timerRunning = true;
  }
  stop(){
    if(this.timerSubscription){
      this.timerSubscription.unsubscribe();
      this.timerRunning = true;
      this.timerValue = 0 ;
    }
  }

}


