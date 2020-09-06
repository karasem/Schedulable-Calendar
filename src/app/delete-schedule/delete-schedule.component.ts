import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISchedule } from '../utils';

@Component({
  selector: 'app-delete-schedule',
  templateUrl: './delete-schedule.component.html',
  styleUrls: ['./delete-schedule.component.scss']
})
export class DeleteScheduleComponent implements OnInit {
  deletedOk = false;
  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<DeleteScheduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ISchedule,
  ) { }

  ngOnInit() {
  }
  closeDialog() {
    this.dialogRef.close();
  }
  deleteProgram() {
    this.deletedOk = true;
  }
}
