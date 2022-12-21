import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html'
})
export class StudentDetailsComponent implements OnInit {

  constructor(private readonly dialogRef: MatDialogRef<StudentDetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: Student | null) {
    
  }
  
  ngOnInit(): void {
  }

}
