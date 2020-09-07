import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISchedule } from '../utils';

type task = 'edit' | 'delete';

@Component({
  selector: 'app-daily',
  styleUrls: ['./daily.component.scss'],
  templateUrl: './daily.component.html',
})
export class DailyComponent implements OnInit {
  @Output() showProgDetail = new EventEmitter<ISchedule>();
  @Output() deletedProg = new EventEmitter<ISchedule>();
  @Input('daily')

  set daily(prog: ISchedule[]) {
    if (prog) {
      this.dailyProg = prog;
    }
  }
  constructor() { }

  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  cardTitle: string;
  dailyProg = [];
  currentDate: string;

  ngOnInit(): void {
    const dayIndex = new Date().getDay();
    const monthIndex = new Date().getMonth();
    this.currentDate = new Date().toLocaleDateString();
    this.cardTitle = `${this.currentDate} / ${this.daysOfWeek[dayIndex]}`;

  }

  editProg(prog: ISchedule) {
    this.showProgDetail.emit(prog);
  }

  deleteProg(prog: ISchedule) {
    this.deletedProg.emit(prog);
  }

}
