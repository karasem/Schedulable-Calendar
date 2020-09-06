import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ISchedule } from '../utils';
@Component({
  selector: 'app-edit-schedule',
  templateUrl: './edit-schedule.component.html',
  styleUrls: ['./edit-schedule.component.scss']
})
export class EditScheduleComponent implements OnInit {
  titleControl = new FormControl('', [Validators.required]);
  descriptionControl = new FormControl('');
  dateControl = new FormControl('', Validators.required);
  schedule
  scheduleAddForm: FormGroup;
  day
  dateFormat;
  constructor(
    private dialog: MatDialog,
    formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditScheduleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ISchedule
  ) {
    this.scheduleAddForm = formBuilder.group({
      date: this.dateControl,
      description: this.descriptionControl,
      title: this.titleControl,
    });
  }

  ngOnInit() {
    if (this.data) {
      this.day = this.data.date;
      this.scheduleAddForm.setValue({
        date: this.data.date,
        description: this.data.description,
        title: this.data.title,
      });
    }
  }
  closeDialog() {
    this.dialogRef.close();
  }
  editProgram() {
    this.scheduleAddForm.setValue({
      date: this.scheduleAddForm.controls.date.value,
      description: this.scheduleAddForm.controls.description.value,
      title: this.scheduleAddForm.controls.title.value,
    });
    this.schedule = { ...this.scheduleAddForm.value, id: this.data.id };
  }
  selectedDate(event) {
    const selectDate: Date = new Date(event.value);
    this.day = selectDate;
  }
}
