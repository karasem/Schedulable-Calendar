import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { DeleteScheduleComponent } from './delete-schedule/delete-schedule.component';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { ISchedule, ICalendar, IWeekly, IMontly } from './utils';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {



  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  groupedDateProg: ICalendar = {};
  lastId = 0;
  currentMonth: number;
  currentWeek: number;
  currentDay: number;
  monthOfYear = [];
  dailyProg: ISchedule[];
  weeklyProg: IWeekly;
  montlyProg: IMontly;

  ngOnInit() {
    const date = new Date();
    this.currentDay = date.getDay();
    this.currentMonth = date.getMonth();
    this.currentWeek = Math.floor((date.getDate() + 6) / 7);
    this.setInitialValueOfGroupedDate(this.currentDay, this.currentWeek, this.currentMonth);
    this.dailyProg = this.groupedDateProg[this.currentMonth][this.currentWeek][this.currentDay];
    this.weeklyProg = this.groupedDateProg[this.currentMonth][this.currentWeek];
    this.montlyProg = this.groupedDateProg[this.currentMonth];
  }

  setInitialValueOfGroupedDate(day, week, month) {
    this.groupedDateProg[month] = this.groupedDateProg[month] || {};
    this.groupedDateProg[month][week] = this.groupedDateProg[month][week] || {};
    this.groupedDateProg[month][week][day] = this.groupedDateProg[month][week][day] || [];
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddScheduleComponent, {
      disableClose: true,
      height: '430px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(() => {
      const app = dialogRef.componentInstance.schedule;
      if (app) {
        this.lastId += 1;
        this.addNewProgToGroupedDate({ ...app, id: this.lastId });
        const msg = 'New Schedule Added';
        this.openSnackBar(msg);
      }
    });
  }

  openSnackBar(msg: string) {
    this.snackBar.open(msg, 'OK', {
      duration: 1000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  openEditDialog(prog: ISchedule) {
    const dialogRef = this.dialog.open(EditScheduleComponent, {
      data: prog,
      disableClose: true,
      height: '430px',
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(() => {
      const app: ISchedule = dialogRef.componentInstance.schedule;
      if (app) {
        if (app.date.toLocaleDateString() === prog.date.toLocaleDateString()) {
          prog.title = app.title;
          prog.description = app.description;
        } else {
          this.deleteSpecificProgInGrouped(prog);
          this.addNewProgToGroupedDate(app);
        }
        const msg = 'Editing Completed';
        this.openSnackBar(msg);
      }
    });
  }

  deleteProg(prog: ISchedule) {
    const dialogRef = this.dialog.open(DeleteScheduleComponent, {
      data: prog,
      disableClose: true,
      width: 'fit-content',
    });

    dialogRef.afterClosed().subscribe(() => {
      const isDeleted = dialogRef.componentInstance.deletedOk;
      if (isDeleted) {
        this.deleteSpecificProgInGrouped(prog);
        const msg = 'Deletion Completed !!';
        this.openSnackBar(msg);
      }
    });

  }

  deleteSpecificProgInGrouped(prog: ISchedule) {
    for (const month of Object.keys(this.groupedDateProg)) {
      for (const week of Object.keys(this.groupedDateProg[month])) {
        for (const day of Object.keys(this.groupedDateProg[month][week])) {
          const daysProg = this.groupedDateProg[month][week][day];
          const isOk = daysProg.findIndex((item) => item.id === prog.id);
          if (isOk !== -1) {
            daysProg.splice(isOk, 1);
          }
        }
      }
    }
  }

  addNewProgToGroupedDate(prog: ISchedule) {
    const progDate: Date = prog.date;
    const day = progDate.getDay();
    const month = progDate.getMonth();
    const week = Math.floor((progDate.getDate() + 6) / 7);
    this.setInitialValueOfGroupedDate(day, week, month);
    const groupeds = this.groupedDateProg[month][week][day];
    groupeds.push(prog);

  }
}
