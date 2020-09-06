import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-schedule',
  templateUrl: './add-schedule.component.html',
  styleUrls: ['./add-schedule.component.scss'],
})
export class AddScheduleComponent implements OnInit {
  titleControl = new FormControl('', [Validators.required]);
  descriptionControl = new FormControl('');
  dateControl = new FormControl('', Validators.required);
  schedule
  scheduleAddForm: FormGroup;
  day: Date;
  dateFormat;
  constructor(
    private dialog: MatDialog,
    formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddScheduleComponent>,
  ) {
    this.scheduleAddForm = formBuilder.group({
      date: this.dateControl,
      description: this.descriptionControl,
      title: this.titleControl,
    });
  }
  ngOnInit() {
    this.day = new Date();
    this.scheduleAddForm.patchValue({
      date: this.day,
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
  addProgram() {
    this.scheduleAddForm.setValue({
      date: this.scheduleAddForm.controls.date.value,
      description: this.scheduleAddForm.controls.description.value,
      title: this.scheduleAddForm.controls.title.value,
    });
    this.schedule = this.scheduleAddForm.value;
  }
  selectedDate(event) {
    const selectDate: Date = new Date(event.value);
    this.day = selectDate;
  }
}