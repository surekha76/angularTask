import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcComponent } from './components/calc/calc.component';
import { TimerComponent } from './components/timer/timer.component';

const routes: Routes = [
  {path : '', component : CalcComponent},
  {path : 'calc', component : CalcComponent},
  {path : 'timer', component: TimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
