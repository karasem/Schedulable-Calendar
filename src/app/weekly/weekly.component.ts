import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISchedule, IWeekly } from '../utils';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.scss']
})
export class WeeklyComponent implements OnInit {

  @Output() showProgDetail = new EventEmitter<ISchedule>();
  @Output() deletedProg = new EventEmitter<ISchedule>();
  @Input('weekly')
  set weekly(prog: IWeekly) {
    if (prog) {
      this.weeklyProg = prog;
    }
  }
  constructor() { }
  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  daysOfProgrammed: string[];
  Object = Object;
  weeklyProg: IWeekly = {};
  cardTitle: string;

  ngOnInit(): void {
    const day = new Date().getDate();
    const weekIndex = Math.floor((day + 6) / 7);
    this.cardTitle = `This Week / ${weekIndex}.Week`;
  }

  editProg(prog: ISchedule) {
    this.showProgDetail.emit(prog);
  }

  deleteProg(prog: ISchedule) {
    this.deletedProg.emit(prog);
  }
}
