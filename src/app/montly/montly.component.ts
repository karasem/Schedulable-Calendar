import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMontly, ISchedule } from '../utils';

@Component({
  selector: 'app-montly',
  templateUrl: './montly.component.html',
  styleUrls: ['./montly.component.scss']
})
export class MontlyComponent implements OnInit {

  @Output() showProgDetail = new EventEmitter<ISchedule>();
  @Output() deletedProg = new EventEmitter<ISchedule>();
  @Input('montly')
  set montly(prog: IMontly) {
    if (prog) {
      this.montlyProg = prog;
    }
  }

  constructor() { }
  monthOfYears = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  daysOfProgrammed: string[];
  Object = Object;
  montlyProg: IMontly = {};
  cardTitle: string;

  ngOnInit(): void {
    const monthIndex = new Date().getMonth();
    this.cardTitle = `This Month / ${this.monthOfYears[monthIndex]}`;
  }

  editProg(prog: ISchedule) {
    this.showProgDetail.emit(prog);
  }

  deleteProg(prog: ISchedule) {
    this.deletedProg.emit(prog);
  }

}
