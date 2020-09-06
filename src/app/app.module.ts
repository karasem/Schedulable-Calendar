import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { DailyComponent } from './daily/daily.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { MontlyComponent } from './montly/montly.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AddScheduleComponent } from './add-schedule/add-schedule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { EditScheduleComponent } from './edit-schedule/edit-schedule.component';
import { DeleteScheduleComponent } from './delete-schedule/delete-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyComponent,
    WeeklyComponent,
    MontlyComponent,
    AddScheduleComponent,
    EditScheduleComponent,
    DeleteScheduleComponent,

  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatInputModule,
    MatDividerModule,
  ],

  entryComponents: [
    AddScheduleComponent,
    EditScheduleComponent,
    DeleteScheduleComponent,
  ],

  providers: [],

  bootstrap: [AppComponent],

})
export class AppModule { }
